# Basic Makefile
# Copied from Dash to Dock, with modifications.

UUID = dynamic-panel-transparency@rockon999.github.io
SRC_MODULES = extension.ts main.ts inject.ts dock.ts dash.ts stylesheet.css
BASE_MODULES = metadata.json COPYING README.md
EXTRA_MODULES = src/prefs.ui
TOLOCALIZE =  _build/prefs.js
MSGSRC = $(wildcard po/*.po)
ifeq ($(strip $(DESTDIR)),)
	INSTALLTYPE = local
	INSTALLBASE = $(HOME)/.local/share/gnome-shell/extensions
else
	INSTALLTYPE = system
	SHARE_PREFIX = $(DESTDIR)/usr/share
	INSTALLBASE = $(SHARE_PREFIX)/gnome-shell/extensions
endif
INSTALLNAME = dynamic-panel-transparency@rockon999.github.io

# The command line passed variable VERSION is used to set the version string
# in the metadata and in the generated zip-file. If no VERSION is passed, the
# current commit SHA1 is used as version number in the metadata while the
# generated zip file has no string attached.
ifdef VERSION
	VSTRING = _v$(VERSION)
else
	VERSION = $(shell git rev-parse HEAD)
	VSTRING =
endif

all: extension

clean:
	rm -f ./schemas/gschemas.compiled

cleanbuild:
	rm -Rf ./_compiled
	rm -Rf ./_build

extension: ./schemas/gschemas.compiled $(MSGSRC:.po=.mo)

./schemas/gschemas.compiled: ./schemas/org.gnome.shell.extensions.dynamic-panel-transparency.gschema.xml
	glib-compile-schemas ./schemas/

potfile: ./po/dynamic-panel-transparency.pot

mergepo: potfile
	for l in $(MSGSRC); do \
		msgmerge -U $$l ./po/dynamic-panel-transparency.pot; \
	done;

./po/dynamic-panel-transparency.pot: compile $(TOLOCALIZE) src/prefs.ui
	mkdir -p po
	touch po/dynamic-panel-transparency.pot
	xgettext -k --keyword=__ --keyword=N__ --add-comments='Translators:' -o po/dynamic-panel-transparency.pot --package-name "Simple Dock" $(TOLOCALIZE)
	intltool-extract --type=gettext/glade src/prefs.ui
	xgettext -k --keyword=_ --keyword=N_ --join-existing -o po/dynamic-panel-transparency.pot prefs.ui.h

./po/%.mo: ./po/%.po
	msgfmt -c $< -o $@

install-local: _build
	rm -rf $(INSTALLBASE)/$(INSTALLNAME)
	mkdir -p $(INSTALLBASE)/$(INSTALLNAME)
	cp -r ./_build/* $(INSTALLBASE)/$(INSTALLNAME)/
ifeq ($(INSTALLTYPE),system)
	# system-wide settings and locale files
	rm -r $(INSTALLBASE)/$(INSTALLNAME)/schemas $(INSTALLBASE)/$(INSTALLNAME)/locale
	mkdir -p $(SHARE_PREFIX)/glib-2.0/schemas $(SHARE_PREFIX)/locale
	cp -r ./schemas/*gschema.* $(SHARE_PREFIX)/glib-2.0/schemas
	cp -r ./_build/locale/* $(SHARE_PREFIX)/locale
endif
	echo done

install: install-local cleanbuild

zip: _build
	cd _build ; \
	zip -qr "$(UUID)$(VSTRING).zip" .
	mv _build/$(UUID)$(VSTRING).zip ./

zip-file: zip cleanbuild

compile:
	tsc -p tsconfig.json --outDir _compiled/
	rollup --no-treeshake ./_compiled/src/extension.js  --file ./_build/extension.js --format es

setup-build:
	-rm -fR ./_build
	mkdir -p _build
	cp $(BASE_MODULES) $(EXTRA_MODULES) _build
	mkdir -p _build/schemas

_build: all setup-build compile
	cp _compiled/src/prefs.js _build/prefs.js
	cp schemas/*.xml _build/schemas/
	cp schemas/gschemas.compiled _build/schemas/
	mkdir -p _build/locale
	for l in $(MSGSRC:.po=.mo) ; do \
		lf=_build/locale/`basename $$l .mo`; \
		mkdir -p $$lf; \
		mkdir -p $$lf/LC_MESSAGES; \
		cp $$l $$lf/LC_MESSAGES/dynamic-panel-transparency.mo; \
	done;
	sed -i 's/"version": -1/"version": "$(VERSION)"/'  _build/metadata.json;
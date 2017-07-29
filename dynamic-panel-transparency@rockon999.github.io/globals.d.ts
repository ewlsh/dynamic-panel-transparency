declare namespace imports {
    let gi;
    let ui;
    let mainloop;
    let lang;

    declare namespace misc {
        declare interface params {
        }
        declare namespace extensionUtils {
            declare function getCurrentExtension(): Extension;
        }
    }
}

declare interface Extension {
    imports;
}

declare var imports;
declare var global;

declare function log(message: string);
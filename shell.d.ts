import * as Shell from '@gi-types/shell0';
import * as Clutter from '@gi-types/clutter8';

declare namespace GnomeShell {
    interface Global extends Shell.Global {
        stage: Clutter.Stage;
    }
}

declare global {
    const global: GnomeShell;
}

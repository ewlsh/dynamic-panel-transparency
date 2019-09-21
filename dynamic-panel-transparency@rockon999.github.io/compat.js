const St = imports.gi.St;

function getActorOf(obj) {
    if (obj instanceof St.Widget) {
        return obj;
    }

    return obj.actor;
}
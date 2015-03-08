
nnl = "PRINT DIRECTIVE - No New Line";
ns = "PRINT DIRECTIVE - No Spaces";

nl = "<br />";
brk = "- - - - - - - - - - - - - - - - - - " + nl

function print() {
    var i, tail = nl, filler = " ", msg = "";
    //document.write(arguments.length, "test", nl);

    for(i in arguments) {
        //document.write(arguments[i]);
        //msg = msg + String(arguments[i]);

        switch (arguments[i]) {
            case nnl:
                tail = "";
                break;
            case ns:
                filler = "";
                break;
            default:
                if (msg) msg += filler;
                msg = msg + String(arguments[i]);
        }

    }
    document.write(msg + tail);

}


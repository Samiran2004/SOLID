// interface DocumentManager {
//     openDocument(): void;
//     closeDocument(): void;
//     saveDocument(): void;
//     scanDocument(): void;
// }

interface DocumentOpener {
    openDocument(): void;
}

interface DocumentCloser {
    closeDocument(): void;
}

interface DocumentSaver {
    saveDocument(): void;
}

interface DocumentScanner {
    scanDocument(): void;
}

// class BasicEditor implements DocumentManager {
//     openDocument(): void {
//         console.log("Open document...");
//     }

//     closeDocument(): void {
//         console.log("Close document...");
//     }

//     saveDocument(): void {
//         console.log("Save document...");
//     }

//     scanDocument(): void {
//         console.log("Don't do anything...");
//     }
// }

class BasicEditor implements DocumentOpener, DocumentCloser, DocumentSaver {
    openDocument(): void {
        console.log("Open document...");
    }

    closeDocument(): void {
        console.log("Close document...");
    }

    saveDocument(): void {
        console.log("Save document...");
    }
}

class AdvanceEditor implements DocumentOpener, DocumentCloser, DocumentSaver, DocumentScanner {
    openDocument(): void {
        console.log("Open document in advance editor...");
    }
    closeDocument(): void {
        console.log("Close document from advance editor...");
    }
    saveDocument(): void {
        console.log("Save document in advance editor...");
    }
    scanDocument(): void {
        console.log("Scan document in advance editor...");
    }
}

let basicEditor: BasicEditor = new BasicEditor();
basicEditor.openDocument();
basicEditor.saveDocument();
basicEditor.closeDocument();

let advanceEditor: AdvanceEditor = new AdvanceEditor();
advanceEditor.scanDocument();
advanceEditor.openDocument();
advanceEditor.saveDocument();
advanceEditor.closeDocument();

export { };
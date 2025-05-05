package ISP_Java;

public class AdvanceEditor implements DocumentOpener, DocumentSaver, DocumentScanner, DocumentCloser {
    @Override
    public void openDocument() {
        System.out.println("Document open with advance editor...");
    }

    @Override
    public void scanDocument() {
        System.out.println("Scan document with advance editor...");
    }

    @Override
    public void saveDocument() {
        System.out.println("Save document with advance editor...");
    }

    @Override
    public void closeDocument() {
        System.out.println("Close document from advance editor...");
    }
}

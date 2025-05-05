package ISP_Java;

public class BasicEditor implements DocumentOpener, DocumentSaver, DocumentCloser {
    @Override
    public void openDocument() {
        System.out.println("Open document...");
    }

    @Override
    public void saveDocument() {
        System.out.println("Save document...");
    }

    @Override
    public void closeDocument() {
        System.out.println("Close document...");
    }
}

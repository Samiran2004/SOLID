package ISP_Java;

public class Main {

    public static void main(String[] args) {
        BasicEditor basicEditor = new BasicEditor();
        basicEditor.openDocument();
        basicEditor.saveDocument();
        basicEditor.closeDocument();

        AdvanceEditor advanceEditor = new AdvanceEditor();
        advanceEditor.openDocument();
        advanceEditor.scanDocument();
        advanceEditor.saveDocument();
        advanceEditor.closeDocument();
    }
}
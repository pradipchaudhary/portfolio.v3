import React, { useState, useEffect, useRef } from "react";
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromRaw,
    DraftBlockType,
} from "draft-js";
import "draft-js/dist/Draft.css";

interface BasicDraftEditorProps {
    value?: string; // JSON string representing editor content
    onChange: (value: string) => void;
}

const DraftEditor: React.FC<BasicDraftEditorProps> = ({ value, onChange }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    const initialState = value
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(value)))
        : EditorState.createEmpty();

    const [editorState, setEditorState] = useState<EditorState>(initialState);

    useEffect(() => {
        if (value) {
            const newState = EditorState.createWithContent(
                convertFromRaw(JSON.parse(value))
            );
            setEditorState(newState);
        }
    }, [value]);

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
        const rawContent = JSON.stringify(
            convertToRaw(state.getCurrentContent())
        );
        onChange(rawContent); // Notify parent of the updated value
    };

    const toggleBlockType = (blockType: DraftBlockType) => {
        const newState = RichUtils.toggleBlockType(editorState, blockType);
        handleEditorChange(newState);
    };

    return (
        <div>
            {/* Toolbar for Headings and List Tools */}
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                }}
            >
                {[...Array(6).keys()].map((index) => {
                    const headingLevel = `header-${
                        index + 1
                    }` as DraftBlockType;
                    return (
                        <button
                            key={headingLevel}
                            type="button"
                            style={{
                                padding: "5px 10px",
                                border:
                                    editorState
                                        .getCurrentContent()
                                        .getBlockForKey(
                                            editorState
                                                .getSelection()
                                                .getStartKey()
                                        )
                                        .getType() === headingLevel
                                        ? "2px solid #0070f3"
                                        : "1px solid #ddd",
                            }}
                            onClick={() => toggleBlockType(headingLevel)}
                        >
                            H{index + 1}
                        </button>
                    );
                })}
                <button
                    type="button"
                    style={{
                        padding: "5px 10px",
                        border:
                            editorState
                                .getCurrentContent()
                                .getBlockForKey(
                                    editorState.getSelection().getStartKey()
                                )
                                .getType() === "unordered-list-item"
                                ? "2px solid #0070f3"
                                : "1px solid #ddd",
                    }}
                    onClick={() => toggleBlockType("unordered-list-item")}
                >
                    UL
                </button>
                <button
                    type="button"
                    style={{
                        padding: "5px 10px",
                        border:
                            editorState
                                .getCurrentContent()
                                .getBlockForKey(
                                    editorState.getSelection().getStartKey()
                                )
                                .getType() === "ordered-list-item"
                                ? "2px solid #0070f3"
                                : "1px solid #ddd",
                    }}
                    onClick={() => toggleBlockType("ordered-list-item")}
                >
                    OL
                </button>
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "4px",
                    minHeight: "200px",
                    cursor: "text",
                    direction: "ltr", // Force Left-To-Right text direction
                }}
            >
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                />
            </div>
        </div>
    );
};

export default DraftEditor;

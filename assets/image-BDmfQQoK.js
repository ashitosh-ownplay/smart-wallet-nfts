const A="data:image/webp;base64,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";export{A as default};

export interface INoteSnippet {
  id: number | string;
  title: string;
}

export interface INoteDetailed {
  id: number | string;
  title: string;
  body: string;
}

export interface INotePreview {
  title: string;
  body: string;
}

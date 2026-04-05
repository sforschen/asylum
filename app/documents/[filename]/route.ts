import { readFile } from "node:fs/promises";
import path from "node:path";

type Props = {
  params: Promise<{
    filename: string;
  }>;
};

export async function GET(_request: Request, { params }: Props) {
  const { filename } = await params;

  if (!/^[a-z0-9-]+\.pdf$/i.test(filename)) {
    return new Response("Not found", { status: 404 });
  }

  const docsDir = path.join(process.cwd(), "content", "site-docs");
  const filePath = path.join(docsDir, filename);

  if (!filePath.startsWith(docsDir)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const file = await readFile(filePath);

    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

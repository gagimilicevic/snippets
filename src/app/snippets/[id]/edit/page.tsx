import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
    params: {
        id: string
    }
}

export default async function SnippetEditPage({params}: SnippetEditPageProps) {
    const awaitedParams = await params; // Ensure params is resolved
    const snippetId = parseInt(awaitedParams.id);

    const snippet = await db.snippet.findFirst({
        where: { id: snippetId },
    });

    if (!snippet) {
        return notFound();
    }

    return (
        <div>
            Editing snippet with title {snippet.title}
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}
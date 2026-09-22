import { verifyToken } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const categories = await db.collection('categories').find().toArray();
    return Response.json(categories);
}

export async function POST(request) {
    const user = verifyToken(request);

    if (!user || user.role !== "admin") {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const { name } = await request.json();

    const result = await db.collection('categories').insertOne({ name });
    return Response.json({ message: 'Category added', result })

}

export async function DELETE(request) {
    const user = verifyToken(request);

    if (!user || user.role !== "admin") {
        return Response.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    const { id } = await request.json();

    const result = await db.collection("categories").deleteOne({
        _id: new ObjectId(id),
    });

    return Response.json({
        message: "Deleted Successfully",
        result,
    });
}
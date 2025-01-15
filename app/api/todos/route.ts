import { NextResponse } from "next/server";
const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(DATA_SOURCE);
  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function DELETE(request: Request) {
  const data: Partial<Todo> = await request.json();
  const id = data.id;

  if (!id) {
    return NextResponse.json("id not found");
  }
  await fetch(`${DATA_SOURCE}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return NextResponse.json(`todo with id ${id} was deleted `);
}

export async function POST(request: Request) {
  const data: Partial<Todo> = await request.json();
  const title = data.title;

  const res = await fetch(DATA_SOURCE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });

  const newTodo = await res.json();

  console.log("Response from API:", newTodo); // Log the response body

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !title || !id || typeof completed !== "boolean") {
    return NextResponse.json("missing required data");
  }

  const res = await fetch(`${DATA_SOURCE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, completed }),
  });

  const updatedTodo = await res.json();

  return NextResponse.json(updatedTodo);
}

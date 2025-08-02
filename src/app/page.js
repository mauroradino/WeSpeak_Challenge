export const dynamic = 'force-dynamic' // Desactiva el prerendering estático
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function aumentar() {
  "use server";
  try{

    await prisma.counter.update({
      where: { id: 1 },
      data: { value: { increment: 1 }, lastUpdatedAt: new Date() }
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error al aumentar el contador:", error);
    throw new Error("No se pudo aumentar el contador");
  }
}

export async function decrementar() {
  "use server";
  try{
    await prisma.counter.update({
      where: { id: 1 },
      data: { value: { decrement: 1 }, lastUpdatedAt: new Date() }
    });
    revalidatePath("/");
  }
  catch (error) {
    console.error("Error al disminuir el contador:", error);
    throw new Error("No se pudo disminuir el contador");
  }
}

const setContador = async () => {
  let contador = await prisma.counter.findFirst({
    where: { id: 1 }
  });

  if (!contador) {
    contador = await prisma.counter.create({
      data: { id: 1, value: 0 }
    });
    return contador;
  }
  
  const now = new Date();
  const lastUpdate = new Date(contador.lastUpdatedAt);
  const diffMinutes = (now - lastUpdate) / (1000 * 60);
  
  if (diffMinutes > 20) {
    contador = await prisma.counter.update({
      where: { id: 1 },
      data: { value: 0, lastUpdatedAt: new Date() }
    });
  }
  
  return contador;
};

export default async function Home() {
  const contador = await setContador();
  return (
     <div className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="font-bold text-2xl">We Speak - Contador</h1>
      <p>{contador?.value ?? 0}</p>
      <div className="flex gap-4">
        <form action={aumentar}>
          <button type="submit" className="bg-slate-400 text-white px-3 py-4 rounded-lg hover:cursor-pointer">
            Aumentar
          </button>
        </form>
        <form action={decrementar}>
          <button type="submit" className="bg-slate-400 text-white px-3 py-4 rounded-lg hover:cursor-pointer">
            Disminuir
          </button>
        </form>
      </div>
    </div>
  );
}
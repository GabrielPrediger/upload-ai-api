import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function createTranscriptionsRoute(app: FastifyInstance) {
  app.post("/videos/:videoId/transcriptions", async (req) => {
    const paramSchema = z.object({
      videoId: z.string().uuid(),
    });
    const videoId = paramSchema.parse(req.params);
  });
}

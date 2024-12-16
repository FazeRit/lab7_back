/*
  Warnings:

  - You are about to drop the `Text` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Text";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Event_eventTime_idx" ON "Event"("eventTime");

-- CreateIndex
CREATE INDEX "Event_eventType_idx" ON "Event"("eventType");

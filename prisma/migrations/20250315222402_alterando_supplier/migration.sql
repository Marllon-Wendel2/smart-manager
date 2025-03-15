/*
  Warnings:

  - You are about to drop the `ClientSupplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qtd` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Interaction" DROP CONSTRAINT "Interaction_clientSupplierId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "qtd" INTEGER NOT NULL,
ALTER COLUMN "value" SET DATA TYPE DECIMAL(65,30);

-- DropTable
DROP TABLE "ClientSupplier";

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_clientSupplierId_fkey" FOREIGN KEY ("clientSupplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

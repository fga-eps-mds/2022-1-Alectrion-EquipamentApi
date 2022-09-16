import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1663332257034 implements MigrationInterface {
  name = 'default1663332257034'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dismissed" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "description" character varying NOT NULL, "author_id" uuid NOT NULL, "equipment_snapshot" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "equipmentId" uuid, "historyId" uuid, "destinationId" uuid, CONSTRAINT "REL_6cdcb1ed8c88c7b1299450d19e" UNIQUE ("destinationId"), CONSTRAINT "PK_d57cb086a6c4bbf87275979da24" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "model" SET NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "description" SET NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "initial_use_date" SET NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "invoice_number" SET NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "dismissed" ADD CONSTRAINT "FK_f87b458fc2dd2843ac47aa2cb43" FOREIGN KEY ("equipmentId") REFERENCES "equipment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "dismissed" ADD CONSTRAINT "FK_99350223cbb8b1da6aa4dbb623a" FOREIGN KEY ("historyId") REFERENCES "history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "dismissed" ADD CONSTRAINT "FK_6cdcb1ed8c88c7b1299450d19e0" FOREIGN KEY ("destinationId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dismissed" DROP CONSTRAINT "FK_6cdcb1ed8c88c7b1299450d19e0"`
    )
    await queryRunner.query(
      `ALTER TABLE "dismissed" DROP CONSTRAINT "FK_99350223cbb8b1da6aa4dbb623a"`
    )
    await queryRunner.query(
      `ALTER TABLE "dismissed" DROP CONSTRAINT "FK_f87b458fc2dd2843ac47aa2cb43"`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "invoice_number" DROP NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "initial_use_date" DROP NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "description" DROP NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ALTER COLUMN "model" DROP NOT NULL`
    )
    await queryRunner.query(`DROP TABLE "dismissed"`)
  }
}

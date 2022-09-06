import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662506781588 implements MigrationInterface {
    name = 'default1662506781588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equipment" DROP CONSTRAINT "FK_148a1c789ab12ecc011028c1935"`);
        await queryRunner.query(`ALTER TABLE "history" RENAME COLUMN "date" TO "equipmentId"`);
        await queryRunner.query(`ALTER TABLE "equipment" DROP COLUMN "acquision"`);
        await queryRunner.query(`ALTER TABLE "equipment" DROP CONSTRAINT "REL_148a1c789ab12ecc011028c193"`);
        await queryRunner.query(`ALTER TABLE "equipment" DROP COLUMN "historyId"`);
        await queryRunner.query(`ALTER TABLE "equipment" ADD "ram_size" character varying`);
        await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "equipmentId"`);
        await queryRunner.query(`ALTER TABLE "history" ADD "equipmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "UQ_613a88237253398395ad197fbf9" UNIQUE ("equipmentId")`);
        await queryRunner.query(`ALTER TABLE "order_service" DROP CONSTRAINT "FK_204a4d8643816109bde984d5b82"`);
        await queryRunner.query(`ALTER TABLE "order_service" DROP CONSTRAINT "REL_204a4d8643816109bde984d5b8"`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_613a88237253398395ad197fbf9" FOREIGN KEY ("equipmentId") REFERENCES "equipment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_service" ADD CONSTRAINT "FK_204a4d8643816109bde984d5b82" FOREIGN KEY ("destinationId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_service" DROP CONSTRAINT "FK_204a4d8643816109bde984d5b82"`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_613a88237253398395ad197fbf9"`);
        await queryRunner.query(`ALTER TABLE "order_service" ADD CONSTRAINT "REL_204a4d8643816109bde984d5b8" UNIQUE ("destinationId")`);
        await queryRunner.query(`ALTER TABLE "order_service" ADD CONSTRAINT "FK_204a4d8643816109bde984d5b82" FOREIGN KEY ("destinationId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "UQ_613a88237253398395ad197fbf9"`);
        await queryRunner.query(`ALTER TABLE "history" DROP COLUMN "equipmentId"`);
        await queryRunner.query(`ALTER TABLE "history" ADD "equipmentId" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "equipment" DROP COLUMN "ram_size"`);
        await queryRunner.query(`ALTER TABLE "equipment" ADD "historyId" uuid`);
        await queryRunner.query(`ALTER TABLE "equipment" ADD CONSTRAINT "REL_148a1c789ab12ecc011028c193" UNIQUE ("historyId")`);
        await queryRunner.query(`ALTER TABLE "equipment" ADD "acquision" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "history" RENAME COLUMN "equipmentId" TO "date"`);
        await queryRunner.query(`ALTER TABLE "equipment" ADD CONSTRAINT "FK_148a1c789ab12ecc011028c1935" FOREIGN KEY ("historyId") REFERENCES "history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

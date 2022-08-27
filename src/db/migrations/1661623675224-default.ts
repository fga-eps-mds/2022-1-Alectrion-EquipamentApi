import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1661623675224 implements MigrationInterface {
  name = 'default1661623675224'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "localization" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "sub_unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "localization" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "parentId" uuid, "unitId" uuid, CONSTRAINT "PK_e0b11bdd44422d92f087163012b" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "sub_unit" ADD CONSTRAINT "FK_517ad70931a186079d42b271f3a" FOREIGN KEY ("parentId") REFERENCES "sub_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "sub_unit" ADD CONSTRAINT "FK_909633f50e5c1f561fbf1a04c7c" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sub_unit" DROP CONSTRAINT "FK_909633f50e5c1f561fbf1a04c7c"`
    )
    await queryRunner.query(
      `ALTER TABLE "sub_unit" DROP CONSTRAINT "FK_517ad70931a186079d42b271f3a"`
    )
    await queryRunner.query(`DROP TABLE "sub_unit"`)
    await queryRunner.query(`DROP TABLE "unit"`)
  }
}

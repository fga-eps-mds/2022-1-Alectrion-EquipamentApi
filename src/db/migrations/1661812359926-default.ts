import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1661812359926 implements MigrationInterface {
  name = 'default1661812359926'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."equipment_type_enum" AS ENUM('CPU', 'NOBREAK', 'SCANNER', 'WEBCAM', 'MONITOR', 'STABILIZER')`
    )
    await queryRunner.query(
      `CREATE TYPE "public"."equipment_status_enum" AS ENUM('ACTIVE', 'ACTIVE_BY_DEMISE', 'INACTIVE', 'MAINTENANCE', 'DOWNGRADED', 'TECHNICAL_RESERVE')`
    )
    await queryRunner.query(
      `CREATE TYPE "public"."equipment_screen_type_enum" AS ENUM('LCD', 'OLED', 'LED', 'TN', 'VA', 'IPS')`
    )
    await queryRunner.query(
      `CREATE TYPE "public"."equipment_storage_type_enum" AS ENUM('HD', 'SSD')`
    )
    await queryRunner.query(
      `CREATE TABLE "equipment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipping_number" character varying NOT NULL, "acquision" character varying NOT NULL, "type" "public"."equipment_type_enum" NOT NULL, "status" "public"."equipment_status_enum" NOT NULL, "model" character varying NOT NULL, "description" character varying NOT NULL, "brand" character varying NOT NULL, "initial_use_date" date NOT NULL, "screen_size" character varying, "invoice_number" character varying NOT NULL, "power" character varying, "screen_type" "public"."equipment_screen_type_enum", "processor" character varying, "storage_type" "public"."equipment_storage_type_enum", "storage_amount" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "unitId" uuid, CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "sub_unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "localization" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "parentId" uuid, "unitId" uuid, CONSTRAINT "PK_e0b11bdd44422d92f087163012b" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "localization" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "equipment" ADD CONSTRAINT "FK_cc5fce306a17e42580a34908afc" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
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
    await queryRunner.query(
      `ALTER TABLE "equipment" DROP CONSTRAINT "FK_cc5fce306a17e42580a34908afc"`
    )
    await queryRunner.query(`DROP TABLE "unit"`)
    await queryRunner.query(`DROP TABLE "sub_unit"`)
    await queryRunner.query(`DROP TABLE "equipment"`)
    await queryRunner.query(`DROP TYPE "public"."equipment_storage_type_enum"`)
    await queryRunner.query(`DROP TYPE "public"."equipment_screen_type_enum"`)
    await queryRunner.query(`DROP TYPE "public"."equipment_status_enum"`)
    await queryRunner.query(`DROP TYPE "public"."equipment_type_enum"`)
  }
}

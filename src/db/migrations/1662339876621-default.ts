import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1662339876621 implements MigrationInterface {
  name = 'default1662339876621'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "equipment" ADD "serial_number" character varying NOT NULL`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "equipment" DROP COLUMN "serial_number"`
    )
  }
}

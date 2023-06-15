import { Sql } from 'postgres';

export type Springseed = {
  id: number;
  name: string;
  type: string;
  description: string;
  preis: number;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE springseeds(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL,
    type varchar (30) NOT NULL,
    description varchar  NOT NULL,
    preis integer

  )

  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE springseeds

  `;
}

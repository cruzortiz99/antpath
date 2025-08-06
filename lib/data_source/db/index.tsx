import { drizzle } from "drizzle-orm/expo-sqlite";
import * as SQLite from "expo-sqlite";
const expoSQL = SQLite.openDatabaseSync("db.sql");
export const db = drizzle(expoSQL);

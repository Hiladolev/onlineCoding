import dal_mysql from "../utils/dal_mysql";

const createCodeBlocksTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS code_blocks (
      id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(45) NOT NULL,
      code VARCHAR(256) NOT NULL,
      entrances INT NULL,
      PRIMARY KEY (id));`;
  const response = dal_mysql.execute(SQLcommand);
};

const getAllCodeBlocks = async () => {
  const SQLcommand = `
      SELECT * FROM online_coding.code_blocks;
      `;
  return await dal_mysql.execute(SQLcommand);
};

const getEntrancesById = async (id: number) => {
  return await dal_mysql.execute(
    `SELECT entrances FROM online_coding.code_blocks where id=${id}`
  );
};

const addStudentEntranceByCodeBlockId = async (id: number) => {
  return await dal_mysql.execute(
    `UPDATE
    online_coding.code_blocks 
   SET
    entrances = entrances + 1 
   WHERE
    id=${id}`
  );
};
const setMentorEntranceByCodeBlockId = async (id: number) => {
  return await dal_mysql.execute(
    `UPDATE
    online_coding.code_blocks 
   SET
    entrances = 1 
   WHERE
    id=${id}`
  );
};
const getCodeBlockById = async (id: number) => {
  return await dal_mysql.execute(
    `SELECT * FROM online_coding.code_blocks where id=${id}`
  );
};

export default {
  createCodeBlocksTable,
  getAllCodeBlocks,
  getEntrancesById,
  addStudentEntranceByCodeBlockId,
  setMentorEntranceByCodeBlockId,
  getCodeBlockById,
};

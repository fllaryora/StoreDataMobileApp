export const DATABASE_FILE_NAME = "db.db";

export const CREATE_JOURNAL_TABLE =
    "create table if not exists journal" + 
        " ( id integer primary key not null, " +
         " postdate text, first text, firstDesc text, " + 
         " second text, secondDesc text, third text, thirdDesc text, " + 
         " fourth text, fourthDesc text, fifth text, fifthDesc fifth);";

export const SELECT_JOURNAL = "select * from journal";

export const INSERT_JOURNAL = "insert into journal " +
    " (postdate, first, firstDesc, second, secondDesc," +
    " third, thirdDesc, fourth, fourthDesc, fifth, fifthDesc) " +
    "values (?,?,?,?,?,?,?,?,?,?,?)";

export const DELETE_JOURNAL_ALL = `delete from journal`;

export const DELETE_JOURNAL_BY_ID = 
`delete from journal where id = ?;`;

export const UPDATE_FIRST_FROM_JOURNAL_BY_ID =
     `update journal set first = ? where id = ?`;

export const UPDATE_FIRSTDESC_FROM_JOURNAL_BY_ID =
     `update journal set firstDesc = ? where id = ?`;

export const UPDATE_SECOND_FROM_JOURNAL_BY_ID =
     `update journal set second = ? where id = ?`;

export const UPDATE_SECONDDESC_FROM_JOURNAL_BY_ID =
     `update journal set secondDesc = ? where id = ?`;

     export const UPDATE_THIRD_FROM_JOURNAL_BY_ID =
     `update journal set third = ? where id = ?`;

export const UPDATE_THIRDDESC_FROM_JOURNAL_BY_ID =
     `update journal set thirdDesc = ? where id = ?`;

export const UPDATE_FOURTH_FROM_JOURNAL_BY_ID =
     `update journal set fourth = ? where id = ?`;

export const UPDATE_FOURTHDESC_FROM_JOURNAL_BY_ID =
     `update journal set fourthDesc = ? where id = ?`;

export const UPDATE_FIFTH_FROM_JOURNAL_BY_ID =
     `update journal set fifth = ? where id = ?`;

export const UPDATE_FIFTHDESC_FROM_JOURNAL_BY_ID =
     `update journal set fifthDesc = ? where id = ?`;
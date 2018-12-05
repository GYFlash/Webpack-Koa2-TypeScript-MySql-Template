import * as mysql from 'mysql';
import CONF from '../config';

export default (sql: string, params: Array<any>, callback: any) => {
  const connection = mysql.createConnection(CONF.DATABASE);
  connection.connect(err => {
    if (err) {
      console.log('数据库连接失败');
      throw err;
    }
    connection.query(sql, params, (err, results, fields) => {
      if (err) {
        console.log('数据库操作失败');
        throw err;
      }
      callback && callback(results, fields);
      connection.end(err => {
        if (err) {
          console.log('关闭数据库连接失败');
          throw err;
        }
      });
    });
  });
};
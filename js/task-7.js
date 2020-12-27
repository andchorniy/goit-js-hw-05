/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let id = 0;

const getId = () => {
  return String(id++).padStart(6, '0');
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    
      this.transactions.push({id:getId(), type,amount})
      
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (typeof amount !== 'number' || amount > 0) {
      account.createTransaction(amount, Transaction.DEPOSIT);
      this.balance += amount;
      console.log(`Сделан депозит ${amount}`);
      return ;
    }

    console.log('Не правильная сумма');
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Не достаточно денег на счету');
      return;
    }
    if (typeof amount !== 'number' || amount > 0) {
      account.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      console.log(`Выплачено ${amount}`);
      return ;
    }

    console.log('Не правильная сумма');
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of account.transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sumTransaction = 0;
    for (const transaction of account.transactions) { 
      if (transaction.type === type) {
        sumTransaction += transaction.amount;
      }
    }
    console.log(sumTransaction);

  },
};
account.deposit(10500);
account.withdraw(55100);
account.deposit(-105100);
account.withdraw(1040);
account.deposit(105800);
account.withdraw(700);
console.table(account.transactions);
account.getBalance();
account.getTransactionDetails("000002")
account.getTransactionTotal(Transaction.WITHDRAW)
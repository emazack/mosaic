const categorizeSimilarTransactions = (transactions) => {

  const withCategoryList = transactions.filter(transaction => transaction.category);
  const withoutCategoryList = transactions.filter(transaction => !(transaction.category));

  const setCategory = (compareAmount, transactionsList, cutOff) => {
    let difference = cutOff;
    let result = "f"; 
    transactionsList.forEach(element => {
      console.log(compareAmount);
      if ( Math.abs(compareAmount - element.amount) < difference ) {
        difference = Math.abs(compareAmount - element.amount);
        result = element.category;
      }
    });
    return result;
  }

  withoutCategoryList.forEach(nocatTransaction => {
    const sameTargetList = withCategoryList.filter(catTransaction => (nocatTransaction.targetAccount === catTransaction.targetAccount));
    let category = setCategory(nocatTransaction.amount, sameTargetList, 1000);
    transactions.forEach(transaction => {
      if (transaction.id === nocatTransaction.id && category) {        
        nocatTransaction["category"] = category;
      }
    });
  });

  return transactions;
};




categorizeSimilarTransactions([
  {
    id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -620,
    time: '2021-04-10T10:30:00Z',
  },
  {
    id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -350,
    category: 'eating_out',
    time: '2021-03-12T12:34:00Z',
  },
  {
    id: 'a9177ced-1c5f-432c-bb7d-867589a9d4b8',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -450,
    category: 'travel',
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a9177ced-1c5f-432c-bb7d-867589a9d4b8',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -550,
    category: 'friends',
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a8170ced-1c5f-432c-bb23d-867589a9d4b8',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -1290,
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a9970ced-1c5f-432c-bb25d-867589a9d4b9',
    sourceAccount: 'my_account',
    targetAccount: 'airport',
    amount: -12290,
    category: 'travel',
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a2170ced-1c5f-432c-bb25d-867589a9d4b9',
    sourceAccount: 'my_account',
    targetAccount: 'airport',
    amount: -11999,
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a2170ced-1c5f-432c-bb25d-867589a9d4b9',
    sourceAccount: 'my_account',
    targetAccount: 'airport',
    amount: -10290,
    time: '2021-04-12T08:20:00Z',
  },
  {
    id: 'a2170ced-1c5f-432c-bb25d-867589a9d4b9',
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -990,
    time: '2021-04-12T08:20:00Z',
  },
])
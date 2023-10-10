'use client';

//components
import Movements from './ui/view/Movements';

import movementsViewModel from './ui/model/movements.models';

const Page = () => {
  const {
    handleSubmit,
    onSubmit,
    control,
    listAccounts,
    listCategories,
    listEvents,
    listInvestments,
    title,
    typeWatch,
    accountEndWatch,
    accountWatch,
  } = movementsViewModel();

  return (
    <Movements
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      title={title}
      listAccounts={listAccounts}
      listCategories={listCategories}
      listEvents={listEvents}
      listInvestments={listInvestments}
      typeWatch={typeWatch}
      accountWatch={accountWatch}
      accountEndWatch={accountEndWatch}
    />
  );
};

export default Page;

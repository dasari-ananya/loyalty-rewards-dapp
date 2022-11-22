type FAQ = {
  question: string;
  answer: string;
};
export const faqSampleData: FAQ[] = [
  {
    question: 'How is eligibility checked?',
    answer:
      'We check the snapshot used by the hardfork of AGI tokens. This was taken on May 28th, 2021, at 08:00:20 AM UTC+0. The Phase Two plan defines the first year of allocations to be reserved for Phase One holders. ',
  },
  {
    question: 'Can I claim multiple allocations at once?',
    answer:
      'Yes, you have up to three years to claim the allocations of year 1 of the loyalty rewards pool, up until November 22nd 2025, 11:00 AM UTC+0.',
  },
  {
    question: 'How do I connect to my Ethernl Wallet?',
    answer: `
    <ul>
    <li>Install the Eternl wallet, add to extension.</li>
    <li>Now from your extension go to eternl wallet.</li>
    <li>Click on the Add Wallet on top left, select the 'Create wallet'.</li>
    <li>Add Wallet Name and Password, click on Save.</li>
    <li>You can add number of accounts here, but for now lets keep it 1. save the changes</li>
    <li>Now click on the 'DAppBrowser (beta)' on the bottom left, select the 'Connect Account' on the right side.</li>
    <li>Select DApp Wallet and click on 'Connect As DApp Account'.</li>
    <li>Now go to loyalty dapp, connect your cardano wallet with Eternal.</li>
    <li>You will see the loyalty dapp url now click on 'Connet to Site'.</li>
    <ul/>`,
  },
  {
    question: 'Why do I need to connect both an Ethereum and a Cardano Wallet?',
    answer:
      'The Ethereum wallet is needed for establishing eligibility. The tokens of the loyalty rewards pool are minted on Cardano, per the Phase Two plan, so you can claim them on Cardano only.',
  },
  {
    question: 'How many tokens will I get?',
    answer:
      'The total tokens for year 1 of the loyalty rewards is 8,293,398 AGIX. These are proportionally distributed among all token holders during the hardfork snapshot, in six monthly allocations. So it all depends on your balance during the hardfork. ',
  },
  {
    question: 'I don’t like any of this, what can I do?',
    answer:
      'In January 2023 a governance round will take place on how to allocate the loyalty rewards pool for year 2 and onwards. Do let your voice be heard and participate!',
  },
  {
    question:
      'Failed Uncaught: UTxO Balance Insufficient',
    answer:
      'Please check if you have sufficient ADA, please note this ADA will be returned back when the AGIX tokens are sent over to the registered cardano Wallet',
  },
];

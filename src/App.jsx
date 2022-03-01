import "./App.css";

function App() {
  const uaArmy =
    "https://www.portmone.com.ua/r3/en/terminal/index/index/id/118102?item_name=Support%20the%20Ukrainian%20Army!&item_id=118102&item_category=Help%20army&item_category2=1212&item_list_name=Catalog&index=1";

  const comeBackAlive =
    "https://www.portmone.com.ua/r3/en/terminal/index/index/id/118105?item_name=БО%20Повернись%20живим%20(Come%20Back%20Alive)&item_id=118105&item_category=Help%20army&item_category2=1212&item_list_name=Catalog&index=3";

  const redCrossUkraine =
    "https://www.portmone.com.ua/r3/en/terminal/index/index/id/118108?item_name=Червоний%20%20Хрест%20України%20(Red%20Cross%20Ukraine)&item_id=118108&item_category=Help%20army&item_category2=1212&item_list_name=Catalog&index=4";
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-center uppercase">
          🇺🇦 Save ukraine 🇺🇦
        </h1>
      </div>
      <div className="p-16">
        <p className="text-1xl text-center">
          Millions of people across the world want to support Ukraine with their
          donations, but transferring money to Ukraine can be confusing and
          difficult. Paypal does not operate in Ukraine, and many other systems
          familiar to Western users are either not available or charge high
          fees.
        </p>
        <p className="text-1xl text-center mt-5">
          Portmone is a local Ukrainian payment provider that can accept money
          from credit cards around the world. It is working with Ukrainian
          charities and help organizations, making foreign donations easy - all
          you need is your credit card.
        </p>
        <p className="text-1xl text-center mt-5">
          Below are the Portmone links for payment to the accounts of the
          Ukrainian Armed Forces, Come Back Alive - an army and veteran charity,
          and Red Cross Ukraine.
        </p>
      </div>
      <div className="mt-5">
        <div className="flex justify-center">
          <div>
            <div className="font-bold mb-2 text-center text-2xl">
              How to donate
            </div>
            All money will be paid to single account in the National Bank of
            Ukraine Manual To make payment via our service:
            <ul>
              <li>1) Enter amount</li>
              <li>2) Press "Pay"</li>
              <li>
                3) Enter your card information: credit / debit card number/
                expiry MM/YY and CVV Our service is secure but, if you wish, you
                can make payment directly to the account # via your banking
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <div className="mr-5">
            <div className="font-bold mb-2 text-center text-2xl">URL</div>
            <div className="pt-1 pb-1">
              <h1>
                <a className="text-blue-600 border-b-blue-700" href={uaArmy}>
                  Support the Ukrainian Army!
                </a>
                <div className="text-yellow-600 mt-2">
                  <a
                    className="m-5"
                    href="https://ukraine.ua/news/donate-to-the-nbu-fund/"
                  >
                    Website
                  </a>
                  <a href="https://www.facebook.com/UkraineUA.MFA/">Facebook</a>
                </div>
              </h1>
            </div>
            <div className="pt-1 pb-1">
              <h1>
                <a
                  className="text-blue-600 border-b-blue-700"
                  href={comeBackAlive}
                >
                  Come Back Alive!
                </a>
                <div className="text-yellow-600 mt-2">
                  <a className="m-5" href="https://savelife.in.ua/en/">
                    Website
                  </a>
                  <a href="https://www.facebook.com/backandalive">Facebook</a>
                </div>
              </h1>
            </div>
            <div className="pt-1 pb-1">
              <h1>
                <a
                  className="text-blue-600 border-b-blue-700"
                  href={redCrossUkraine}
                >
                  Red Cross Ukraine!
                </a>
                <div className="text-yellow-600 mt-2">
                  <a className="m-5" href="https://redcross.org.ua/en/">
                    Website
                  </a>
                  <a href="https://www.facebook.com/RedCrossUkraine/">
                    Facebook
                  </a>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-20 fixed bottom-0 left-0 right-0">
          This page was created as assistance to donors outside of Ukraine by
          Kyiv software developer
          <a
            className="ml-1 underline text-blue-600"
            href="https://www.linkedin.com/in/nikita-t-9b32b294/"
          >
            Nik Tysiachnyi
          </a>
          , as part of an effort to help my country.
        </div>
      </div>
    </div>
  );
}

export default App;

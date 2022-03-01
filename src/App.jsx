import "./App.css";

function App() {
  const uaArmy =
    "https://www.portmone.com.ua/r3/uk/terminal/index/index/id/118102?item_name=Support%20the%20Ukrainian%20Army!&item_id=118102&item_category=Допомога%20нашій%20Армії&item_category2=1212&item_list_name=Catalog&index=1";

  const comeBackAlive =
    "https://www.portmone.com.ua/r3/uk/terminal/index/index/id/118105?item_name=БО%20Повернись%20живим%20(Come%20Back%20Alive)&item_id=118105&item_category=Допомога%20нашій%20Армії&item_category2=1212&item_list_name=Catalog&index=3";

  const redCrossUkraine =
    "https://www.portmone.com.ua/r3/uk/terminal/index/index/id/118108?item_name=Червоний%20%20Хрест%20України%20(Red%20Cross%20Ukraine)&item_id=118108&item_category=Допомога%20нашій%20Армії&item_category2=1212&item_list_name=Catalog&index=4";
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-center uppercase">
          🇺🇦 Save ukraine 🇺🇦
        </h1>
      </div>
      <div className="mt-5">
        <p className="text-1xl text-center uppercase">
          List of resources where you can donate money to protect Ukraine
        </p>
      </div>
      <div className="mt-5">
        <div className="flex justify-center">
          <div>
            <div className="font-bold mb-2 text-center text-2xl">Manual</div>
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
        <div className="flex justify-center p-40">
          <div className="mr-5">
            <div className="font-bold mb-2 text-center text-2xl">URL</div>
            <div className="pt-1 pb-1">
              <h1>
                <a className="text-blue-600 border-b-blue-700" href={uaArmy}>
                  Support the Ukrainian Army!
                </a>
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
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

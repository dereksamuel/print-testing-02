window.onload = () => {
  document.querySelector('#to-print').addEventListener('click', async () => {
    let posPrinterInfo = [
      { text: '' },
      {
        text: '8XA4SA45',
        size: {
          width: 1,
          height: 1
        },
        style: 'bu',
        align: 'ct'
      },
      { text: '' },
      {
        text: "RPO",
        size: {
          width: 0,
          height: 1
        },
        style: 'n'
      },
      { text: '' },
      {
        text: "Hola mundo",
        size: {
          width: 0,
          height: 0
        }
      },
      { text: "Vanti" },
      { text: '' },
      { text: "15/06/15" },
      { text: '' },
      { text: '' },
      { text: '' }
    ]
  
    let posPrinterSetup = {
      "baudRate": 9600,
      "options": {
        "encoding": "utf8"
      },
      "port": "USB",
      "stopBit": 1
    };
    let electronPrinter = window.ElectronPrinter || window.ipcRenderer ? window.ipcRenderer.ElectronPrinter : null
    console.log(posPrinterInfo, posPrinterSetup,"posPrinterSetup");
    let url = `https://dereksamuel.github.io/print-testing-02/toprint.html`;
    console.log('To print', url);
  
    if (electronPrinter) {
      if (typeof window.ipcRenderer.ElectronPrinter === 'function') {
        try {
          await electronPrinter({
            mode: 'printURL',
            url,
            optsPrinter: {
              silent: true,
              printBackground: false,
              color: false,
              margin: {
                marginType: 'printableArea'
              },
              landscape: false,
              scaleFactor: 1
            },
            posPrinter: {
              posPrinterInfo,
              posPrinterSetup: posPrinterSetup
            }
          });
        } catch (error) {
          console.error('Error when print ticket', error);
          console.log(error);
        }
      } else console.log('ElectronPrinter not exist');
    } else console.log('ElectronPrinter not exist');
  })
};
#include <VirtualWire.h>

// Pin 13 : LED
void setup()
{
    vw_set_ptt_inverted(true); // Required for DR3100
    vw_set_rx_pin(12);
    vw_setup(4000);  // Bits per sec
    pinMode(13, OUTPUT);

    vw_rx_start();       // Start the receiver PLL running
}

// Command Format
// 'S' : prefix
// '0' or '1' : on / off status
// '0' ~ '9' : receiver id
void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;

    if (vw_get_message(buf, &buflen)) // Non-blocking
    {
      if ((buf[0]=='S') && (buf[1]=='0')  && (buf[2]=='1'))
      {
        digitalWrite(13,0);
      }
      else if ((buf[0]=='S') && (buf[1]=='1')  && (buf[2]=='1'))
      {
        digitalWrite(13,1);
      }
    }
}
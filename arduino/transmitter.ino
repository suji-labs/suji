#include <VirtualWire.h>

#define COMMAND_LEN 3
#define TRANS_TIME 3

String str;
char bell[COMMAND_LEN];

void setup()
{
  Serial.begin(115200);
  vw_set_ptt_inverted(true);
  vw_set_tx_pin(12);
  vw_setup(4000);
  pinMode(11, OUTPUT);
  pinMode(13, OUTPUT);
  digitalWrite(11, LOW);
  digitalWrite(13, LOW);
}

void loop()
{
  if (Serial.available()){
    digitalWrite(13, HIGH);
    str=Serial.readString();
    for (int i=0; i<COMMAND_LEN; ++i)
      bell[i] = str[i];
    if (bell[0] == 'S')
    {
      digitalWrite(11, HIGH);
      for (int i=0; i<TRANS_TIME; ++i)
      {
        vw_send((uint8_t*)bell, COMMAND_LEN);
        vw_wait_tx();
      }
    }
    digitalWrite(13, LOW);
    delay(1000);
  }
  else
    digitalWrite(11, LOW);

  Serial.println(' ');
}

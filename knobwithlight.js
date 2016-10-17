
#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  pinMode(13, OUTPUT); //connects red
  pinMode(12, OUTPUT); //connects green
}

void loop() {
  val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
  val = map(val, 0, 1023, 5, 180);     // scale it to use it with the servo (value between 0 and 180)
  myservo.write(val);                  // sets the servo position according to the scaled value
  delay(15);    // waits for the servo to get there
  if(val <= 20){
    digitalWrite(12, LOW);   //green off
    digitalWrite(13, HIGH);   //red on
  }else{
    digitalWrite(13, LOW);   //red off
    digitalWrite(12, HIGH);  //green on
  }
}

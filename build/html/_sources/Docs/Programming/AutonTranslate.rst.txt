######################
Autonomous Translation
######################

Translation is quite simple. Here is an `example <https://youtu.be/fAh0onTAZ4g>`_. 
Just use ``setTarget`` to set the target position. 

.. code-block:: cpp

    controller->setTarget({XPOSE_in, YPOSE_in, ZPOSE_deg});

Since the controller is asynchronous, you can use ``waitUntilSettled`` to block other actions 
until the target is reached.

.. code-block:: cpp

    controller->setTarget({XPOSE_in, YPOSE_in, ZPOSE_deg});
    controller->waitUntilSettled();

The code snippet above is equivalent to the following:

.. code-block:: cpp

    controller->setTarget({XPOSE_in, YPOSE_in, ZPOSE_deg}, true);

If you want to move while doing something else (ex. raising a lift to a certain height), you can 
use the do something like this: 

.. code-block:: cpp
    
        controller->setTarget({XPOSE_in, YPOSE_in, ZPOSE_deg});
        while(true) {
            LIFT_MOVEMENT();
            pros::delay(10);
        }
        controller->waitUntilSettled();

More information regarding the API can be found `here <https://yessir120.github.io/HolonomicLib/html/index.html>`_
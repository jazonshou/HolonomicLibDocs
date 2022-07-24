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

Here is a complete example: 

.. code-block:: cpp
    :linenos:

    /** Create Okapi OdomChassisController - used as a base for HolonomicLib's chassis controller */
    std::shared_ptr<OdomChassisController> chassis = ChassisControllerBuilder()
        .withMotors(
            1,  // Top left
            -2, // Top right (reversed)
            -3, // Bottom right (reversed)
            4   // Bottom left
        )
        .withSensors(
            ADIEncoder{'A', 'B'}, // left encoder in ADI ports A & B
            ADIEncoder{'C', 'D', true},  // right encoder in ADI ports C & D (reversed)
            ADIEncoder{'E', 'F'}  // middle encoder in ADI ports E & F
        )
        // specify the tracking wheels diameter (2.75 in), track (7 in), and TPR (360)
        // specify the middle encoder distance (1 in) and diameter (2.75 in)
        .withOdometry({{2.75_in, 7_in, 1_in, 2.75_in}, quadEncoderTPR})
        .buildOdometry();

    /** Create HolonomicLib AsyncHolonomicChassisController - controls chassis movement */
    std::shared_ptr<AsyncHolonomicChassisController> controller = AsyncHolonomicChassisControllerBuilder()
        // Output chassis controller (must be created before this)
        .withOutput(chassis)
        // PID gains (must be tuned for your robot)
        .withPIDGains(
            {0.05, 0.0, 0.00065, 0.0}, // Translation gains
            {0.05, 0.0, 0.00065, 0.0} // Turn gains
        )
        // Tolerance (how close the chassis must be to the target before stopping)
        .withTolerance({2_in, 2_in, 1_deg})
        .build();

    /** Opcontrol: moves chassis to a target position */
    void opcontrol() {
        controller->setTarget({XPOSE_in, YPOSE_in, ZPOSE_deg}, true);
    }

More information regarding the HolonomicLib API can be found `here <https://yessir120.github.io/HolonomicLib/html/index.html>`_
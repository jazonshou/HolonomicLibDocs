#################
Setting Things Up
#################

HolonomicLib uses Okapi's ``OdomChassisController`` for output. Thus, we must first create 
a ``OdomChassisController`` object as shown below. 

.. note::
    This assumes that you are using namespace okapi

.. code-block:: cpp
    :linenos:

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

.. note::
    For more details on Okapi's ``OdomChassisController``,
    please checkout the `Okapi documentation <https://okapilib.github.io/OkapiLib/index.html>`_.

Next, create an ``AsyncHolonomicChassisController`` object. This will be used to control the robot.

.. code-block:: cpp
    :linenos:

    std::shared_ptr<HolonomicLib::AsyncHolonomicChassisController> controller = 
    HolonomicLib::AsyncHolonomicChassisControllerBuilder()
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
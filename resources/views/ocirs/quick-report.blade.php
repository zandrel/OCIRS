<html>
<head>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css" rel="stylesheet" />
    <link type="text/css" href="{{ asset('./ocirs_css/quickreport.css') }}" rel="stylesheet">
</head>
 
<body>
    <div class="quick_form">
        <div>
            <h1 style="color:#0d2048;">Report Now</h1>
            <div id="multi-step-form-container">
                <!-- Form Steps / Progress Bar -->
                <ul class="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                    <!-- Step 1 -->
                    <li class="form-stepper-active text-center form-stepper-list" step="1">
                        <a class="mx-2">
                            <span class="form-stepper-circle" style="">
                                <span>1</span>
                            </span>
                            <div class="label">Reporter's Information</div>
                        </a>
                    </li>
                    <!-- Step 2 -->
                    <li class="form-stepper-unfinished text-center form-stepper-list" step="2">
                        <a class="mx-2">
                            <span class="form-stepper-circle text-muted">
                                <span>2</span>
                            </span>
                            <div class="label text-muted">Report Details</div>
                        </a>
                    </li>
                </ul>
                <!-- Step Wise Form Content -->
                <form method="POST" action="{{route('storeguestdb')}}">
                    <!-- Step 1 Content -->
                    <section id="step-1" class="form-step" style="height:60%;">
                        @csrf
                        @method('PUT')
                        <div class="form-outline mb-4">
                        <label class="form-label" for="fName">First Name</label>
                            <input required type="text" id="fName" name="fName" class="form-control" oninput="this.value = this.value.toUpperCase()"/>
                           
                        </div>


                        <div class="form-outline mb-4">
                        <label class="form-label" for="lName">Last Name</label>
                            <input required type="text" id="lName" name="lName" class="form-control asd" oninput="this.value = this.value.toUpperCase()"/>
                            
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="mobileNum">Phone Number</label>
                            <input required type="text" id="mobileNum" name="mobileNum" class="form-control" />
                           

                        </div>
                        @error('mobileNum')
                        <span class="text-danger">Phone Number Format is Invalid</span>
                        @enderror

                        <div class="mt-3">
                            <button style="float:right;"class="button btn-navigate-form-step" type="button" step_number="2">Next</button>
                        </div>
                    </section>
                    <!-- Step 2 Content, default hidden on page load. -->
                    <section id="step-2" class="form-step d-none">
                            <div class="form_container">

                                {{ csrf_field() }}
                                <div class="heading">
                                    <label>Salamat! Ang iyong sumbong ay mahalaga sa amin at lahat ng impormasyong inyong ibibigay ay
                                        aming pangangalagaan at mananatiling kompidensyal</label>
                                </div>
                                <div class="form_wrap">
                                    <div class="form_item">
                                        <label>Brief message/narrative of complaint <span>*</span></label>
                                        <textarea required name="narrative" placeholder="Type a message..." rows="10" cols="60">{{ old('narartive') }}</textarea>
                                    </div>
                                </div>
                                <div class="form_wrap">
                                    <div class="form_item">
                                        <label>Report Type <span>*</span></label>
                                        <select type="number" name="reportType" required>
                                            <option required value="">Select type of crime</option>
                                            <option {{ old('reportType') === 'Crime' ? 'selected' : '' }} value="Crime">Crime</option>
                                            <option {{ old('reportType') === 'Earthquake' ? 'selected' : '' }} value="Incident">Incident</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form_wrap">
                                    <div class="form_item">
                                        <label>Location <span>*</span></label>
                                        <input required type="text" name="location" id="location">
                                        <input required type="hidden" id="latitude" name="latitude" />
                                        <input required type="hidden" id="longitude" name="longitude" />
                                        <div id="map"></div>
                                        <div class="error" id="phone"></div>
                                    </div>
                                </div>
                                <div class="form_item">
                                    <label>Upload Image/Video</label>

                                </div>
                                <div class="upload">
                                    <input type="file" style="padding: 5px" name="media">
                                </div>
                                <div class="form_item">
                                    <label>Date and Time of Crime/Incident <span>*</span></label>
                                </div>

                                <div class="form_wrap select_box">
                                    <div class="form_item">
                                        <label>Date <span>*</span></label>
                                        <input required type="date" name="date" placeholder="Type a message...">
                                        </select>
                                    </div>
                                    <div class="form_item">
                                        <label>Time <span>*</span></label>
                                        <input required type="time" name="time" placeholder="Type a message...">

                                    </div>

                                </div>
                            </div>
                        <div class="mt-3">
                        <button style="float:right; margin-left:5px;  padding:5px; " class="button btn-navigate-form-step" type="button submit" step_number="3">Submit</button>
                        <button style="float:right;  width:10%; padding:5px;" class="button btn-navigate-form-step" type="button" step_number="1">Prev</button>
                           
                        </div>
                    </section>
                </form>
            </div>
        </div>


    </div>

</body>
<!-- MDB -->
<script type="text/javascript">
    /**
     * Define a function to navigate betweens form steps.
     * It accepts one parameter. That is - step number.
     */
    const navigateToFormStep = (stepNumber) => {
        /**
         * Hide all form steps.
         */
        document.querySelectorAll(".form-step").forEach((formStepElement) => {
            formStepElement.classList.add("d-none");
        });
        /**
         * Mark all form steps as unfinished.
         */
        document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
            formStepHeader.classList.add("form-stepper-unfinished");
            formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
        });
        /**
         * Show the current form step (as passed to the function).
         */
        document.querySelector("#step-" + stepNumber).classList.remove("d-none");
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
        /**
         * Mark the current form step as active.
         */
        formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
        formStepCircle.classList.add("form-stepper-active");
        /**
         * Loop through each form step circles.
         * This loop will continue up to the current step number.
         * Example: If the current step is 3,
         * then the loop will perform operations for step 1 and 2.
         */
        for (let index = 0; index < stepNumber; index++) {
            /**
             * Select the form step circle (progress bar).
             */
            const formStepCircle = document.querySelector('li[step="' + index + '"]');
            /**
             * Check if the element exist. If yes, then proceed.
             */
            if (formStepCircle) {
                /**
                 * Mark the form step as completed.
                 */
                formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
                formStepCircle.classList.add("form-stepper-completed");
            }
        }
    };
    /**
     * Select all form navigation buttons, and loop through them.
     */
    document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
        /**
         * Add a click event listener to the button.
         */
        formNavigationBtn.addEventListener("click", () => {
            /**
             * Get the value of the step.
             */
            const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
            /**
             * Call the function to navigate to the target form step.
             */
            navigateToFormStep(stepNumber);
        });
    });
</script>
<script>
        @if(session('success'))
            // alert(' {{ session('success') }} ');
            swal("Done!", "{{ session('success') }}", "success");
       @endif
    </script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="../../js/map.js"></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAhWiJ06MRz8AP2rKI5LYZzbev7L4xxc8&callback=Map"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</html>
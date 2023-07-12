<!-- <html>

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<style>
* {

    font-family: 'Poppins', sans-serif;
}
.col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
.form-control-sm {
    height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
}
.form-control {
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.main-content2 .wrapper {
    max-width: 1500px;
    width: auto;
    margin: 5px auto 0;
    padding: 20px;
}
.main-content2 .heading {
    margin: -30px;
    color: #04215f;
    font-size: 19px;
    margin-bottom: 35px;
    padding: 20px;
}
.main-content2 .wrapper .form_container {
    height: auto;
    background: #fff;
    padding: 20px;
    box-shadow: 1px 1px 15px rgb(0 0 0 / 15%);
    border-radius: 3px;
    margin-top: 30px;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.g-2, .gy-2 {
    --bs-gutter-y: 0.5rem;
}
@media (min-width: 1200px){
.col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
}
.main-content2 .formcontent label {
    color: #04215f;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
}
.form-label {
    margin-bottom: 0.5rem;
}
.form-control:disabled, .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}
@media (min-width: 1200px){
.col-sm-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}}
h6{
    margin-top: 0px;
}
.main-content2,
.wrapper{
    margin-top: 0px;
}

</style>

</head>



<body>
   
    <div class="main-content2">
        <div class="wrapper">


            <div class="form_container">

                <div class="heading">
                    <div class="contents">
                        <h6>Philippine National Police</h6>
                        <h1>Record Form</h1>

                    </div>

                </div>
            
                <div class="formcontent text-center">
                    <div class="row g-2">
                
                   
                        <div class="col-sm-4">
                            <label class="form-label">IRF Entry Number</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->irf_entry }}" name="irf_entry" id="irf_entry">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Type of Incident</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->reportType }}" name="reportType" id="reportType">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Copy For</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->copy_for }}" name="copy_for" id="copy_for">
                        </div>
                        <div class="heading2">
                            INSTRUCTIONS: Refer to PNP SOP on ‘Recording of Incidents in the Police Blotter’ in
                            filling up this form. This Incident Record Form (IRF) may be reproduced,
                            photocopied, and/or downloaded from the DIDM website, www.didm.pnp.gov.ph.
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Date and Time Reported</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->created_at }} " name="" id="">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Date and Time of Incident</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->date }} {{ $listResolvee->time }}" name="" id="">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Place of Incident</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->location }}" name="location" id="location">
                        </div>
                        <br><br><br>
                        <div class="heading2">
                            <h2>
                                ITEM "A" - REPORTING PERSON
                            </h2>
                        </div>

                        <div class="col-sm-3">

                            <label class="form-label">Family Name</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->lName }}" name="lName" id="lName">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">First Name</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->fName }}" name="fName" id="fName">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Middle Name</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->mName }}" name="mName" id="mName">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Qualifier</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->qualifier }}" name="qualifier" id="qualifier">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Nickname</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->nickname }}" name="nickname" id="nickname">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Citizenship</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->citizenship }}" name="citizenship" id="citizenship">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Sex</label>

                            <select disabled class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sex" id="sex">
                                <option value="{{ $listResolvee->sex }}">
                                    {{ $listResolvee->sex }}
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Civil Status</label>

                            <select disabled class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="civilStatus" id="civilStatus">
                                <option value="{{ $listResolvee->civilStatus }}">
                                    {{ $listResolvee->reportstatus }}
                                </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widower">Widower</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Date of Birth</label>
                            <input disabled type="date" class="form-control form-control-sm" value="{{ $listResolvee->birthDate }}" name="birthDate" id="birthDate">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Age</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->age }}" name="age" id="age">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Place of Birth</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->placeofbirth }}" name="placeofbirth" id="placeofbirth">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Home Phone</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->homephone }}" name="homephone" id="homephone">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Mobile Phone</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->mobileNum }}" name="mobileNum" id="mobileNum">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Current Address (House Number/Street)</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->street }}" name="street" id="street">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input disabled type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->barangay }}" name="barangay" id="barangay">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->municipality }}" name="municipality" id="municipality">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->province }}" name="province" id="province">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Other Address (House Number/Street)</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->street2 }}" name="street2" id="street2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input disabled type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->barangay2 }}" name="barangay2" id="barangay2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->municipality2 }}" name="municipality2" id="municipality2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->province2 }}" name="province2" id="province2">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Highest Educational Attainment</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->highesteduc }}" name="highesteduc" id="highesteduc">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Occupation</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->occupation }}" name="occupation" id="occupation">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">ID Card Presented</label>
                            <input disabled type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Email Address(if any)</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->email }}" name="email" id="email">
                        </div>


                        <div class="heading2">
                            <h2>
                                ITEM "B" - SUSPECT'S DATA
                            </h2>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Family Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->suslname }}" name="suslname" id="suslname">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susfname }}" name="susfname" id="susfname">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Middle Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susmname }}" name="susmname" id="susmname">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Qualifier</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susqualifier }}" name="susqualifier" id="susqualifier">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Nickname</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susnickname }}" name="susnickname" id="susnickname">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Citizenship</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->suscitizenship }}" name="suscitizenship" id="suscitizenship">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Sex</label>

                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sussex" id="sussex">
                                <option value="{{ $listResolvee->sussex }}">
                                    {{ $listResolvee->sussex }}
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Civil Status</label>
                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscivilstatus" id="suscivilstatus">
                                <option value="{{ $listResolvee->suscivilstatus }}">
                                    {{ $listResolvee->reportstatus }}
                                </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widower">Widower</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" class="form-control form-control-sm" value="{{ $listResolvee->susbirth }}" name="susbirth" id="susbirth">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Age</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susage }}" name="susage" id="susage">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Place of Birth</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susplaceofbirth }}" name="susplaceofbirth" id="susplaceofbirth">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Home Phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->sushomephone }}" name="sushomephone" id="sushomephone">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Mobile Phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susmobilephone }}" name="susmobilephone" id="susmobilephone">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Current Address (House Number/Street)</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susstreet }}" name="susstreet" id="susstreet">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susbarangay }}" name="susbarangay" id="susbarangay">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susmunicipality }}" name="susmunicipality" id="susmunicipality">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susprovince }}" name="susprovince" id="susprovince">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Other Address (House Number/Street)</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susstreet2 }}" name="susstreet2" id="susstreet2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susbarangay2 }}" name="susbarangay2" id="susbarangay2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susmunicipality2 }}" name="susmunicipality2" id="susmunicipality2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susprovince2 }}" name="susprovince2" id="susprovince2">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Highest Educational Attainment</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->sushighesteduc }}" name="sushighesteduc" id="sushighesteduc">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Occupation</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susoccupation }}" name="susoccupation" id="susoccupation">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Word Address</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->suswordaddress }}" name="suswordaddress" id="suswordaddress">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Relation to Victim</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susrelationtovictim }}" name="susrelationtovictim" id="susrelationtovictim">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Email Address</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susemail }}" name="susemail" id="susemail">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">If AFP/PNP Personnel: RANK</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susifrank }}" name="susifrank" id="susifrank">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Unit Assignment</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susunitassignment }}" name="susunitassignment" id="susunitassignment">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Group Affiliation</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susgroup }}" name="susgroup" id="susgroup">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">With previous criminal record?</label>
                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscrimerecord" id="suscrimerecord">
                                <option value="{{ $listResolvee->suscrimerecord }}">
                                    {{ $listResolvee->suscrimerecord }}
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Status of Previous Case</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susstatusrecord }}" name="susstatusrecord" id="susstatusrecord">
                        </div>
                        <div class="col-sm-3">
                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-3">

                            <label class="form-label">(if yes, please specify)</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susspecifyrecord }}" name="susspecifyrecord" id="susspecifyrecord">

                        </div>
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Height</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susheight }}" name="susheight" id="susheight">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Weight</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susweight }}" name="susweight" id="susweight">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Build</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susbuild }}" name="susbuild" id="susbuild">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Color of Eyes</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->suscoloreyes }}" name="suscoloreyes" id="suscoloreyes">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Description of Eyes</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susdescripeyes }}" name="susdescripeyes" id="susdescripeyes">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Description of Hair</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                        </div>
                        <div class="col-sm-3">

                            <label class="form-label">Under the Influence?</label>
                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="susinfluence" id="susinfluence">
                                <option value="{{ $listResolvee->susinfluence }}">
                                    {{ $listResolvee->susinfluence }}
                                </option>
                                <option value="No">No</option>
                                <option value="Drugs">Drugs</option>
                                <option value="Liquor">Liquor</option>
                                <option value="Others">Others</option>

                            </select>

                        </div>
                        <div class="heading2">
                            <h2>
                                FOR CHILDREN IN CONFLICT WITH THE LAW
                            </h2>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Name of Guardian</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chilguardian }}" name="chilguardian" id="chilguardian">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Guardian Address</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chilguardianaddress }}" name="chilguardianaddress" id="chilguardianaddress">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Home Phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chilhomephone }}" name="chilhomephone" id="chilhomephone">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Mobile Phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chilmobilephone }}" name="chilmobilephone" id="chilmobilephone">
                        </div>
                        <div class="heading2">
                            <h2>
                                ITEM "C" - VICTIM'S DATA
                            </h2>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Family Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->viclnam }}" name="viclnam" id="viclnam">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicfname }}" name="vicfname" id="vicfname">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Middle Name</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicmname }}" name="vicmname" id="vicmname">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Qualifier</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicqualifier }}" name="vicqualifier" id="vicqualifier">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Nickname</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicnickname }}" name="vicnickname" id="vicnickname">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Citizenship</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->viccitizenship }}" name="viccitizenship" id="viccitizenship">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Sex</label>
                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="vicsex" id="vicsex">
                                <option value="{{ $listResolvee->vicsex }}">
                                    {{ $listResolvee->vicsex }}
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Civil Status</label>
                            <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="viccivilstat" id="viccivilstat">
                                <option value="{{ $listResolvee->viccivilstat }}">
                                    {{ $listResolvee->viccivilstat }}
                                </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widower">Widower</option>

                            </select>
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" class="form-control form-control-sm" value="{{ $listResolvee->vicbirth }}" name="vicbirth" id="vicbirth">
                        </div>
                        <div class="col-sm-1">
                            <label class="form-label">Age</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicage }}" name="vicage" id="vicage">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Place of Birth</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicplaceofbirth }}" name="vicplaceofbirth" id="vicplaceofbirth">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Home Phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vichomephone }}" name="vichomephone" id="vichomephone">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Mobile phone</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicmobilephone }}" name="vicmobilephone" id="vicmobilephone">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Current Address (House Number/Street)</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicstreet }}" name="vicstreet" id="vicstreet">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicbarangay }}" name="vicbarangay" id="vicbarangay">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicmunicipality }}" name="vicmunicipality" id="vicmunicipality">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicprovince }}" name="vicprovince" id="vicprovince">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Other Address (House Number/Street)</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicstreet2 }}" name="vicstreet2" id="vicstreet2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Village/Sitio</label>
                            <input type="text" class="form-control form-control-sm" value="" name="" id="">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Barangay</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicbarangay2 }}" name="vicbarangay2" id="vicbarangay2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Town/City</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicmunicipality2 }}" name="vicmunicipality2" id="vicmunicipality2">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">Province</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->vicprovince2 }}" name="vicprovince2" id="vicprovince2">
                        </div>
                        <div class="heading2">
                            <h2>
                                ITEM "D" - NARRATIVE OF INCIDENT
                            </h2>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Type of Incident </label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->reportType }}" name="reportType" id="reportType">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Date/Time of Incident</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->date }} {{ $listResolvee->time }}" name="date" id="date">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Place of Incident</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->location }}" name="location" id="location">
                        </div>
                        <div class="heading3">
                            ENTER IN DETAIL THE NARRATIVE OF THE INCIDENT OR EVENT, ANSWERING THE WHO, WHAT,
                            WHEN, WHERE, WHY AND HOW OF REPORTING.
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" value="{{ $listResolvee->narrative }}" name="narrative" id="narrative" aria-label="Disabled input example" [disabled]="valuebtn" style="height: 464px">{{ $listResolvee->narrative }}</textarea>
                            <label for="floatingTextarea2">Type a message....</label>
                        </div>
                        <div class="heading4">
                            <div class="heading3">
                                (DETAILS OF THIS NARRATIVE SHALL BE THE BASIS IN THE ENTRY OF RECORD IN THE
                                POLICE BLOTTER)
                            </div>
                        </div>
                        <div class="col-sm-4" style="background: #E2E3E7;">
                            <div class="bottomtxt">
                                <label class="form-label">I HEREBY CERTIFY TO THE CORRECTNESS OF THE FOREGOING
                                    TO THE BEST OF MY
                                    KNOWLEDGE AND BELIEF.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Name of Reporting Person</label>
                            <input disabled type="text" class="form-control form-control-sm" value="{{ $listResolvee->fName }} {{ $listResolvee->lName }}" name="name" id="name">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Signature of Reporting Person</label>
                        </div>
                        <div class="col-sm-4" style="background: #E2E3E7;">
                            <div class="bottomtxt">
                                <label class="form-label">SUBSCRIBED AND SWORN TO BEFORE ME.
                                </label>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Name of Administering Officer</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->administering_officer }}" name="administering_officer" id="administering_officer">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Signature of Administering Officer</label>
                        </div>

                        <div class="col-sm-8">
                            <label class="form-label">RANK, NAME AND DESIGNATION OF POLICE OFFICER (WHETHER
                                HE/SHE IS THE DUTY INVESTIGATOR,
                                INVESTIGATOR ON CASE OR THE ASSISTING POLICE OFFICER)</label>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Signature of Administering Officer</label>
                        </div>

                        <div class="col-sm-4" style="background:#E2E3E7;">
                            <div class="bottomtxt">
                                <label class="form-label">INCIDENT RECORDED IN THE BLOTTER BY:
                                </label>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <label class="form-label">Rank/Name of Desk Officer</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->deskofficer_name }}" name="deskofficer_name" id="deskofficer_name">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Signature of Desk Officer</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                        </div>
                        <div class="col-sm-2">
                            <label class="form-label">BLOTTER ENTRY NR:</label>
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->blotter_entry }}" name="blotter_entry" id="blotter_entry">
                        </div>
                        <div class="heading5">
                            REMINDER TO REPORTING PERSON
                            <div class="heading6">
                                Keep the copy of this Incident Record Form (IRF). An update of the progress of
                                the investigation of the crime or incident
                                that you reported will be given to you upon presentation of this IRF. For your
                                reference, the data below is the contact
                                details of this police station.
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Name of Administering Officer</label>

                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->administering_officer }}" name="" id="">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Telephone</label>

                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->administering_officer_phone }}" name="administering_officer_phone" id="administering_officer_phone">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Investigator-on-Case </label>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->investigator_on_case }}" name="investigator_on_case" id="investigator_on_case">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Mobile Phone</label>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->investigator_on_case_phone }}" name="investigator_on_case_phone" id="investigator_on_case_phone">
                        </div>

                        <div class="col-sm-3">
                            <label class="form-label">Name of Chief/Head of Office</label>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chief_of_head }}" name="chief_of_head" id="chief_of_head">
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Mobile Phone</label>
                        </div>
                        <div class="col-sm-3">
                            <input type="text" class="form-control form-control-sm" value="{{ $listResolvee->chief_of_head_phone }}" name="chief_of_head_phone" id="chief_of_head_phone">
                        </div>


                    </div>
                             
                </div>

       
            </div>
        </div>


</body>



</html> -->
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <style type="text/css">
        * {
            font-family: "Times New Roman", Times, serif;
            
        }

        table {
            font-size: x-small;
            border-color: black;
            border: .88px;
            border-right:.99px solid black;
            border-style: solid;
        }


        tfoot tr td {
            font-weight: bold;
            font-size: x-small;
        }

        .gray {
            background-color: whitesmoke;
        }

        h3,
        h1 {
            margin: 0px;
        }

        td {
            margin:0;
            
        }

        @page {
            margin-left: 10;
            margin-right: 10;
            margin-top: 40;
        }
        .page-break {
    page-break-after: always;
}
    </style>
</head>

<body>
    <!--Incident Form----------------------------------------------------------------------------------------------------------------------------------->
    <table width="100%" >
    <thead style="background-color: lightgray;">
        <tr>
            <td align="center">
                <h3>Philippine National Police</h3>
                <h1> Incident Record Form </h1>
            </td>
        </tr>
    </thead>
    </table>
    <table width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:35%; background-color: whitesmoke  ; border-right:1px solid black; padding-top: 1px; padding-bottom: 6px;">IRF Entry Number</td>
            <td style="width:34%; background-color: whitesmoke; border-right:1px solid black; padding-top: 1px; padding-bottom: 6px;">Type of Incident</td>
            <td style="width:33%; padding-top: 1px; padding-bottom:6px; ">Copy For</td>
        </tr>
        <tr>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->irf_entry }}</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->reportType }}</td>
            <td style="width:35%; padding-bottom:5px;">{{ $listResolvee->copy_for }}</td>
        </tr>
        </thead>
    </table>
    <table width="100%">
        <td> INSTRUCTIONS: Refer to PNP SOP on ‘Recording of Incidents in the Police Blotter’ in
            filling up this form. This Incident Record Form (IRF) may be reproduced,
            photocopied, and/or downloaded from the DIDM website, www.didm.pnp.gov.ph.</td>

        </tr>
    </table>
    <table width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Date and Time Reported</td>
            <td style="width:34%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Date and Time of Incident</td>
            <td style="width:33%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Place of Incident</td>
        </tr>
        <tr>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->created_at }}</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->date }} {{ $listResolvee->time }}</td>
            <td style="width:35%; padding-bottom:5px; ">{{ $listResolvee->location }}</td>
        </tr>
        
    </thead>
    </table>
    <!--REPORTING Form----------------------------------------------------------------------------------------------------------------------------------->
 
    <table width="100%">
    <thead style="background-color: lightgray;">
        <td align="center">
                <h1>ITEM "A" - REPORTING PERSON </h1>
            </td>
        </tr>
    </thead>
    </table>

    <table width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-top:1px; padding-bottom:6px;">Family Name</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-top:1px; padding-bottom:6px;">First Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-top:1px; padding-bottom:6px;">Middle Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-top:1px; padding-bottom:6px;">Qualifier</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Nickname</td>
        </tr>
        <tr>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->lName }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->fName }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->mName }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->qualifier }}</td>
            <td style="width:20%; padding-bottom:5px;">{{ $listResolvee->nickname }}</td>
        </tr> 
    </thead>
</table>    
<table width="100%" >
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:20%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Citizenship</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Sex</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Civil Status</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Date of Birth</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Age</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Place of Birth</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Home Phone</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Mobile Phone</td>
        </tr>
        <tr>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->citizenship }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->sex }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->civilStatus }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->birthDate }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->age }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->placeofbirth }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->homephone }}</td>
            <td style="width:20%;  padding-bottom:5px;">{{ $listResolvee->mobileNum }}</td>
        </tr> 
    </thead>
</table>
    

<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->street }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->sitio }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->barangay }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  border-bottom: 1px solid black;">{{ $listResolvee->municipality }}</td>
            <td style="width:20%;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->province }}</td>
        </tr> 
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->street2 }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->sitio2 }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->barangay2 }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->municipality2 }}</td>
            <td style="width:20%; padding-bottom:5px;">{{ $listResolvee->province2 }}</td>
        </tr> 
    </thead>
</table>
<table width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%;  background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Highest Education Attainment</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">occupation</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">ID card Presented</td>
            <td style="width:40%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Email Address(if any)</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->highesteduc }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->occupation }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ;">{{ $listResolvee->id_type }}</td>
            <td style="width:40%; padding-bottom:5px; ">{{ $listResolvee->email }}</td>
        </tr> 
    </thead>
</table>
<!--Item B Suspect's Data------------------------------------------------------------------------------------------------------------------------------------>
<table width="100%">
<thead style="background-color: lightgray;">
        <td align="center">
                <h1>ITEM "B" - SUSPECT'S DATA </h1>
            </td>
        </tr>
    </thead>
    </table>
    <table width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:30%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Family Name</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">First Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Middle Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Qualifier</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Nickname</td>
        </tr>
        <tr>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->suslname }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->susfname }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->susmname }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->susqualifier }}</td>
            <td style="width:20%; padding-bottom:5px;">{{ $listResolvee->susnickname }}</td>
        </tr> 
    </thead>
</table>    
<table width="100%">  
      <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Citizenship</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Sex</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">civilStatus</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Date of Birth</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Age</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Place of Birth</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Home Phone</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Mobile Phone</td>
        </tr>
        <tr>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->suscitizenship }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->sussex }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->suscivilstatus }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->susbirth }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->susage }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->susplaceofbirth }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->sushomephone }}</td>
            <td style="width:20%; padding-bottom:5px;">{{ $listResolvee->susmobilephone }}</td>
        </tr> 
    </thead>
</table>
    

<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->susstreet }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->sussitio }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->susbarangay }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->susmunicipality }}</td>
            <td style="width:20%;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->susprovince }}</td>
        </tr> 
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke;  padding-top:1px; padding-bottom:6px;k; ">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->susstreet2 }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->sussitio2 }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->susbarangay2 }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; ">{{ $listResolvee->susmunicipality2 }}</td>
            <td style="width:20%;  padding-bottom:5px;">{{ $listResolvee->susprovince2 }}</td>
        </tr> 
    </thead>
</table>
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Highest Education Attainment</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">occupation</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Word Address</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Relation to Victim</td>
            <td style="width:40%; background-color: whitesmoke;  padding-top:1px; padding-bottom:6px; ">Email Address</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->sushighesteduc }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susoccupation }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->suswordaddress }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susrelationtovictim }}</td>
            <td style="width:40%; padding-bottom:5px; ">{{ $listResolvee->susemail }}</td>
        </tr> 
    </thead>
</table>
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">if AFP/PNP personel: RANK</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Unit Assignment</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Group Affiliation</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">with previous Criminal record</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">(if yes, Please Specify)</td>
            <td style="width:30%; background-color: whitesmoke;  padding-top:1px; padding-bottom:6px; ">Status of previous Case</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susifrank }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susunitassignment }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susgroup }}</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->suscrimerecord }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susspecifyrecord }}</td>
            <td style="width:30%; padding-bottom:5px; ">susstatusrecord</td>
        </tr> 
    </thead>
</table>
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:10%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Height</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">waight</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Build</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Color of Eyes</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Descriptiom of Eyes</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Description of hair</td>
            <td style="width:40%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;  ">Under the Influence</td>
        </tr>
        <tr>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susheight }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susweight }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susbuild }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->suscoloreyes }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susdescripeyes }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->susdescriphair }}</td>
            <td style="width:40%; padding-bottom:5px; ">{{ $listResolvee->susinfluence }}</td>
        </tr> 
    </thead>
</table>
<!-- CHILDREN IN CONFLICT WITH THE LAW Data------------------------------------------------------------------------------------------------------------------------------------>
<table width="100%">
    <thead style="background-color: lightgray;">
        <td align="center">
                <h1>FOR CHILDREN IN CONFLICT WITH THE LAW </h1>
            </td>
        </tr>
    </thead>
    </table>
    <table  width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:35%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Name of the Guardian</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Guardian Address</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Home Phone</td>
            <td style="width:35%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Mobile Phone</td>
        </tr>
        <tr>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->chilguardian }}</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->chilguardianaddress }}</td>
            <td style="width:35%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; ">{{ $listResolvee->chilhomephone }}</td>
            <td style="width:35%; padding-bottom:5px; ">{{ $listResolvee->chilmobilephone }}</td>
        </tr> 
    </thead>
</table>
<!-- VIctims Data------------------------------------------------------------------------------------------------------------------------------------>
<table width="100%">
<thead style="background-color: lightgray;">
        <td align="center">
                <h1> ITEM "C" - VICTIM'S DATA</h1>
            </td>
        </tr>
    </thead>
    </table>

    <table width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:30%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Family Name</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">First Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Middle Name</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Qualifier</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Nickname</td>
        </tr>
        <tr>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->viclnam }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicfname }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicmname }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicqualifier }}</td>
            <td style="width:20%; padding-bottom:5px;">{{ $listResolvee->vicnickname }}</td>
        </tr> 
    </thead>
</table>    
<table width="100%" >
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:20%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Cityzenship</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Sex</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">civilStatus</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Date of Birth</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Age</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Place of Birth</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Home Phone</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Mobile Phone</td>
        </tr>
        <tr>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->viccitizenship }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicsex }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->viccivilstat }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicbirth }}</td>
            <td style="width:10%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicage }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicplaceofbirth }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vichomephone }}</td>
            <td style="width:20%;  padding-bottom:5px;">{{ $listResolvee->vicmobilephone }}</td>
        </tr> 
    </thead>
</table>
    

<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;  ">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->vicstreet }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->vicsitio }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->vicbarangay }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->vicmunicipality }}</td>
            <td style="width:20%; padding-bottom:5px; border-bottom: 1px solid black;">{{ $listResolvee->vicprovince }}</td>
        </tr> 
        <tr>
            <td style="width:40%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Current Address(House Number/Street)</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Village/Sitio</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Barangay</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Town/City</td>
            <td style="width:20%; background-color: whitesmoke;  padding-top:1px; padding-bottom:6px; ">Province</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicstreet2 }}</td>
            <td style="width:30%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicsitio2 }}</td>
            <td style="width:20%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;">{{ $listResolvee->vicbarangay2 }}</td>
            <td style="width:20%; background-color: whitesmoke; padding-bottom:5px; border-right:1px solid black; ">{{ $listResolvee->vicmunicipality2 }}</td>
            <td style="width:20%;  padding-bottom:5px;">{{ $listResolvee->vicprovince2 }}</td>
        </tr> 
    </thead>
</table>

<!-- VIctims Data------------------------------------------------------------------------------------------------------------------------------------>
<div class="page-break"></div>
<table width="100%">
    <thead style="background-color: lightgray;">
        <td align="center">
                <h1> ITEM "D" - NARRATIVE OF INCIDENT</h1>
            </td>
        </tr>
    </thead>
    </table>
    <table  width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <tr>
            <td style="width:40%;  background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Type of Incident</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px; ">Data/Time of Incident</td>
            <td style="width:40%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Place of Incident</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; padding-bottom:5px; border-right:1px solid black;  ">{{ $listResolvee->reportType }}</td>
            <td style="width:40%; background-color: whitesmoke; padding-bottom:5px; border-right:1px solid black;  ">{{ $listResolvee->time }} {{ $listResolvee->date }}</td>
            <td style="width:40%; padding-bottom:5px;">{{ $listResolvee->vicmunicipality2 }}</td>
        </tr> 
    </thead>
</table>

<table width="100%">
    <thead style="background-color: lightgray;">
        <td align="center">
                <h5> ENTER IN DETAIL THE NARRATIVE OF THE INCIDENT OR EVENT, ANSWERING THE WHO, WHAT, WHEN, WHERE, WHY AND HOW OF REPORTING.</h5>
            </td>
        </tr>
    </thead>
    </table>
    <table  width="100%">
    <thead style="background-color: whitesmoke; text-align:left; ">
         <tr>
            
            <td style="height:50px;">
            {{ $listResolvee->narrative }}
            <!-- <textarea rows="90" cols="90">{{ $listResolvee->narrative }}</textarea> -->
        </tr>
    </thead>
</table>
<table width="100%">
    <thead style="background-color: lightgray;">
        <td align="center">
                <h5> (DETAIL OF THIS NARRATIVE SHALL BE THE ENTRY OF RECORD IN THE POLICE BLOTTER.)</h5>
            </td>
        </tr>
    </thead>
    </table>
    <table  width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
    <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">I HEREBY CERTIFY TO THE CORRECTNESS OF THE FOREGOING TO THE BEST OF MY </td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">Name of Reporting Person</td>
            <td style="width:40%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px;">Signature of Reporting Person</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  ">KNOWLEDGE AND BELIEF</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  padding-bottom:5px;"> {{ $listResolvee->fName }} {{ $listResolvee->lName }}</td>
        </tr> 
    </thead>
</table> 
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
    <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">SUBCRIBE AND SWORN TO BEFORE ME.</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;padding-top:1px; padding-bottom:6px;">Name of Administering officer</td>
            <td style="width:40%; background-color: whitesmoke; padding-top:1px; padding-bottom:6px; ">Signature of Administering officer</td>
        </tr>
        <tr>
            <td hidden style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; "></td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;">{{ $listResolvee->administering_officer }}</td>
        </tr> 
    </thead>
</table>
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
    <tr>
            <td style="width:60%; background-color: whitesmoke; border-right:1px solid black; padding-top:1px; padding-bottom:6px;">RANK, NAME AND DESIGNATION OF POLICE OFFICER(WHERETHER HE/SHE IS THE DUTY OF INVESTIGATION, INVESTIGATOR ON CASE OR THE ASSISTING POLICE OFFICER)</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black padding-top:1px; padding-bottom:30px;">Signature of Administering Officer</td>
        </tr>
    </thead>
</table>
<table  width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
    <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; align:center;">INCIDENT RECORDED IN THE BLOTTER BY:</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;">Rank/Name of Desk OFficer</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;">Signature of Desk Officer</td>
            <td style="width:40%; background-color: whitesmoke;  ">Blotter Entry NR:</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px; "></td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:5px;  ">{{ $listResolvee->deskofficer_name }}</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:30px;  "></td>
            <td style="width:40%; background-color: whitesmoke; padding-bottom:5px; ">TEST</td>
        </tr> 
    </thead>
</table>
<table width="100%">
<thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
        <td >
                <h4 align="center" Style="margin-top:1px; margin-bottom:1px;"> REMINDER</h4>
                <h5 Style="margin-bottom:5px; margin-top:1px;">Keep this Copy of Incident Report Form(IRF). An updateof the progress of the invistigator of the crime or incident that you reported will be given to you upon presentation og this IRF. For your references, the data below is the contact details of this  police station</h5>
            </td>
        </tr>
    </thead>
    </table>
    <table  width="100%">
    <thead style=" background-color: whitesmoke; text-align:left; font-size:10px">
    <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; border-bottom: 1px solid black; align:center; padding-bottom:10px;">Name of Administering officer</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; border-bottom: 1px solid black; text-align:center;">{{ $listResolvee->administering_officer }}</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; border-bottom: 1px solid black; text-align:center;  padding-bottom:10px;">Telephone</td>
            <td style="width:40%; background-color: whitesmoke; border-bottom: 1px solid black; text-align:center; ">{{ $listResolvee->administering_officer_phone }}</td>
        </tr>
        <tr>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black;  border-bottom: 1px solid black; padding-bottom:5px;">Investigator-on-case</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; border-bottom: 1px solid black; padding-bottom:5px;">{{ $listResolvee->investigator_on_case }}</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; border-bottom: 1px solid black; text-align:center; padding-bottom:5px;">Mobile Phone</td>
            <td style="width:40%; background-color: whitesmoke; border-bottom: 1px solid black;padding-bottom:5px; ">{{ $listResolvee->investigator_on_case_phone }}</td>
        </tr> 
        <tr>
        <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; padding-bottom:10px;">Name of Chief/Head of Office</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; ">{{ $listResolvee->chief_of_head }}</td>
            <td style="width:40%; background-color: whitesmoke; border-right:1px solid black; text-align:center;  padding-bottom:10px;"> Mobile Phone</td>
            <td style="width:40%; background-color: whitesmoke;">{{ $listResolvee->chief_of_head_phone }}</td>

        </tr> 

        
    </thead>
</table>

</body>

</html>


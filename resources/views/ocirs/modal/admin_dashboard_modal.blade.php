   <!--  -->
   <!--  -->
   <!--  -->
   <!--  -->
   <!-- MODAL RECENT / view -->
   @foreach ($listValidation as $validation)
   <div class="modal fade " id="viewmodal{{ $validation->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
                   <div class="title2">
                       <h1 style="text-align: center;"><b>Report Details</b></h1>
                   </div>
                   <form method="POST" action="{{route('adminupdatereport', [$validation->id])}}">
                       @csrf
                       @method('PUT')
                       <div class="reportdet">
                           <table style="width:100%">

                               <tr>
                                   <td><b>Report Code:</b></td>
                                   <td>{{ $validation->id }}</td>
                                   <td><b>Status</b></td>
                                   <td>{{ $validation->reportstatus }}</td>
                                   <td><b>Set Status:</b></td>
                                   <td>
                                       <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="reportstatus" id="reportstatus">
                                           <option value="{{ old('reportstatus') ? old('reportstatus') : $validation->reportstatus }}">
                                               {{ $validation->reportstatus }}
                                           </option>
                                           <option value="Validating">For Validation</option>
                                           <option value="Dispatched">Dispatched</option>
                                           <option value="Processing">Processing</option>
                                           <option value="Unresolved">Unresolved</option>
                                           <option value="Resolved">Resolved</option>
                                       </select>
                                   </td>
                                   <td><b>Set barangay:</b></td>
                                   <td>
                                       <select required class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="repoort_brgy" id="repoort_brgy">
                                           <option required value="{{ old('repoort_brgy') ? old('repoort_brgy') : $validation->repoort_brgy }}">
                                               {{ $validation->repoort_brgy }}
                                           </option>
                                           <option value="Annafunan East">Annafunan East</option>
                                           <option value="Annafunan West">Annafunan West</option>
                                           <option value="Atulayan Norte">Atulayan Norte</option>
                                           <option value="Atulayan Sur">Atulayan Sur</option>
                                           <option value="Bagay">Bagay</option>
                                           <option value="Buntun">Buntun</option>
                                           <option value="Caggay">Caggay</option>
                                           <option value="Capatan">Capatan</option>
                                           <option value="Carig Norte">Carig Norte</option>
                                           <option value="Carig Sur">Carig Sur</option>
                                           <option value="Caritan Centro">Caritan Centro</option>
                                           <option value="Caritan Norte">Caritan Norte</option>
                                           <option value="Caritan Sur">Caritan Sur</option>
                                           <option value="Cataggaman Nuevo">Cataggaman Nuevo</option>
                                           <option value="Cataggaman Pardo	">Cataggaman Pardo</option>
                                           <option value="Cataggaman Viejo">Cataggaman Viejo</option>
                                           <option value="Centro 01">Centro 01</option>
                                           <option value="Centro 02">Centro 02</option>
                                           <option value="Centro 03">Centro 03</option>
                                           <option value="Centro 04">Centro 04</option>
                                           <option value="Centro 05">Centro 05</option>
                                           <option value="Centro 06">Centro 06</option>
                                           <option value="Centro 07">Centro 07</option>
                                           <option value="Centro 08">Centro 08</option>
                                           <option value="Centro 09">Centro 09</option>
                                           <option value="Centro 10">Centro 10</option>
                                           <option value="Centro 11">Centro 11</option>
                                           <option value="Centro 12">Centro 12</option>
                                           <option value="Dadda">Dadda</option>
                                           <option value="Gosi Norte">Gosi Norte</option>
                                           <option value="Gosi Sur">Gosi Sur</option>
                                           <option value="Larion Alto">Larion Alto</option>
                                           <option value="Larion Bajo">Larion Bajo</option>
                                           <option value="Leonarda">Leonarda</option>
                                           <option value="Libag Norte">Libag Norte</option>
                                           <option value="Libag Sur">Libag Sur</option>
                                           <option value="Linao East">Linao East</option>
                                           <option value="Linao Norte">Linao Norte</option>
                                           <option value="Linao West">Linao West</option>
                                           <option value="Namabbalan Norte">Namabbalan Norte</option>
                                           <option value="Namabbalan Sur">Namabbalan Sur</option>
                                           <option value="Pallua Norte">Pallua Norte</option>
                                           <option value="Pallua Sur">Pallua Sur</option>
                                           <option value="Pengue-Ruyu">Pengue-Ruyu</option>
                                           <option value="San Gabriel">San Gabriel</option>
                                           <option value="Tagga">Tagga</option>
                                           <option value="Tanza">Tanza</option>
                                           <option value="Ugac Norte">Ugac Norte</option>
                                           <option value="Ugac Sur">Ugac Sur</option>
                                       </select>
                                   </td>
                               </tr>
                           </table>
                       </div>


                       <div class="form first">

                           <div class="fields">
                               <div class="input-field">
                                   <span class="title"><b>Brief message/narrative of complaint</b></span>
                               </div>

                               <div class="input-field">
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="10" cols="60">{{ $validation->narrative }}</textarea>

                               </div>

                               <div class="input-field">
                                   <span class="title"><b>Location</b></span>
                               </div>

                               <div class="input-field">
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="3" cols="60">{{ $validation->location }}</textarea>
                               </div>
                               <div class="input-field1">
                                   <span class="title"><b>Date of Crime/Incident</b></span>
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $validation->date }}</textarea>
                                   <span class="title"><b>Time of Crime/Incident</b></span>
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $validation->time }}</textarea>
                               </div>
                               <div class="input-field1">
                                   <span class="title"><b>Image</b></span>
                                  <img src="{{ asset('storage/image/Reported_Files/') . '/' . $validation->media }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                               </div>


                             
                               <br><br>
                               <div class="title1">
                                   <p>Reporter Details</p>
                               </div>
                               <table style="width:100%">
                                   <tr>
                                       <td>User ID:</td>
                                       <td> <input disabled type="email" value="{{ $validation->userid }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                       <td>Contact:</td>
                                       <td> <input disabled type="email" value="{{ $validation->mobileNum }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                   </tr>
                                   <tr>
                                       <td>Full Name:</td>
                                       <td> <input disabled type="email" value="{{ $validation->fName }} {{ $validation->lName }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                       <td>Home Address:</td>
                                       <td> <input disabled type="email" value="{{ $validation->street }} {{ $validation->barangay }} {{ $validation->municipality }} {{ $validation->province }} " class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                   </tr>
                               </table>
                               <br><br>
                               <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                   <button type="button submit" class="btn btn-primary">Save changes</button>
                               </div>
                           </div>
                       </div>





                   </form>
               </div>
           </div>

       </div>
   </div>
   @endforeach


   <!--  -->
   <!--  -->
   <!--  -->
   <!--  -->
   <!-- MODAL DISPATCH / view -->
   @foreach ($listDispatch as $dispatch)
   <div class="modal fade" id="viewmodalx{{ $dispatch->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
                   <div class="title2">
                       <h1 style="text-align: center;"><b>Report Details</b></h1>
                   </div>
                   <form method="POST" action="{{route('adminupdatereport', [$dispatch->id])}}">
                       @csrf
                       @method('PUT')
                       <div class="reportdet2">
                           <table style="width:100%">

                               <tr>
                                   <td><b>Report Code:</b></td>
                                   <td>{{ $dispatch->id }}</td>
                                   <td><b>Status</b></td>
                                   <td>{{ $dispatch->reportstatus }}</td>
                                   <td><b>Set Status:</b></td>
                                   <td><select required class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="reportstatus" id="reportstatus">
                                           <option required value="{{ old('reportstatus') ? old('reportstatus') : $dispatch->reportstatus }}">
                                               {{ $dispatch->reportstatus }}
                                           </option>
                                           <option value="Validating">For Validation</option>
                                           <option value="Dispatched">Dispatched</option>
                                           <option value="Processing">Processing</option>
                                           <option value="Unresolved">Unresolved</option>
                                           <option value="Resolved">Resolved</option>
                                       </select> </td>
                                   <td><b>Set barangay:</b></td>
                                   <td>
                                           <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="repoort_brgy" id="repoort_brgy">
                                           <option value="{{ old('repoort_brgy') ? old('repoort_brgy') : $dispatch->repoort_brgy }}">
                                               {{ $dispatch->repoort_brgy }}
                                           </option>
                                           <option value="Annafunan East">Annafunan East</option>
                                           <option value="Annafunan West">Annafunan West</option>
                                           <option value="Atulayan Norte">Atulayan Norte</option>
                                           <option value="Atulayan Sur">Atulayan Sur</option>
                                           <option value="Bagay">Bagay</option>
                                           <option value="Buntun">Buntun</option>
                                           <option value="Caggay">Caggay</option>
                                           <option value="Capatan">Capatan</option>
                                           <option value="Carig Norte">Carig Norte</option>
                                           <option value="Carig Sur">Carig Sur</option>
                                           <option value="Caritan Centro">Caritan Centro</option>
                                           <option value="Caritan Norte">Caritan Norte</option>
                                           <option value="Caritan Sur">Caritan Sur</option>
                                           <option value="Cataggaman Nuevo">Cataggaman Nuevo</option>
                                           <option value="Cataggaman Pardo	">Cataggaman Pardo</option>
                                           <option value="Cataggaman Viejo">Cataggaman Viejo</option>
                                           <option value="Centro 01">Centro 01</option>
                                           <option value="Centro 02">Centro 02</option>
                                           <option value="Centro 03">Centro 03</option>
                                           <option value="Centro 04">Centro 04</option>
                                           <option value="Centro 05">Centro 05</option>
                                           <option value="Centro 06">Centro 06</option>
                                           <option value="Centro 07">Centro 07</option>
                                           <option value="Centro 08">Centro 08</option>
                                           <option value="Centro 09">Centro 09</option>
                                           <option value="Centro 10">Centro 10</option>
                                           <option value="Centro 11">Centro 11</option>
                                           <option value="Centro 12">Centro 12</option>
                                           <option value="Dadda">Dadda</option>
                                           <option value="Gosi Norte">Gosi Norte</option>
                                           <option value="Gosi Sur">Gosi Sur</option>
                                           <option value="Larion Alto">Larion Alto</option>
                                           <option value="Larion Bajo">Larion Bajo</option>
                                           <option value="Leonarda">Leonarda</option>
                                           <option value="Libag Norte">Libag Norte</option>
                                           <option value="Libag Sur">Libag Sur</option>
                                           <option value="Linao East">Linao East</option>
                                           <option value="Linao Norte">Linao Norte</option>
                                           <option value="Linao West">Linao West</option>
                                           <option value="Namabbalan Norte">Namabbalan Norte</option>
                                           <option value="Namabbalan Sur">Namabbalan Sur</option>
                                           <option value="Pallua Norte">Pallua Norte</option>
                                           <option value="Pallua Sur">Pallua Sur</option>
                                           <option value="Pengue-Ruyu">Pengue-Ruyu</option>
                                           <option value="San Gabriel">San Gabriel</option>
                                           <option value="Tagga">Tagga</option>
                                           <option value="Tanza">Tanza</option>
                                           <option value="Ugac Norte">Ugac Norte</option>
                                           <option value="Ugac Sur">Ugac Sur</option>
                                       </select> </td>

                               </tr>
                           </table>
                       </div>
                       <div class="form first">

                           <div class="fields">
                               <div class="input-field">
                                   <span class="title"><b>Brief message/narrative of complaint</b></span>
                               </div>

                               <div class="input-field">
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="10" cols="60">{{ $dispatch->narrative }}</textarea>

                               </div>

                               <div class="input-field">
                                   <span class="title"><b>Location</b></span>
                               </div>

                               <div class="input-field">
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="3" cols="60">{{ $dispatch->location }}</textarea>
                               </div>

                               <div class="input-field1">
                                   <span class="title"><b>Image</b></span>
                                   <img src="{{ asset('storage/image/Reported_Files/') . '/' . $dispatch->media }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                               </div>


                               <div class="input-field1">
                                   <span class="title"><b>Date of Crime/Incident</b></span>
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $dispatch->date }}</textarea>
                                   <span class="title"><b>Time of Crime/Incident</b></span>
                                   <textarea disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $dispatch->time }}</textarea>
                               </div>
                           </div>
                       </div>

                       <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           <button type="button submit" class="btn btn-primary">Save changes</button>
                       </div>
               </div>




               </form>
           </div>
       </div>
   </div>
   @endforeach
   <!--  -->
   <!--  -->
   <!--  -->
   <!--  -->
   <!-- MODAL PROCESSING / update -->
   @foreach ($listProcessing as $processing)
   <div class="modal fade" id="modalform{{ $processing->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div> 
               <div class="modal-body">
                   <form method="POST" action="{{route('admin_updatereport',['preport' => $processing->id, 'xsd' => $processing->userid])}}">
                       @csrf
                       @method('PUT')
                       <div class="reportdet3">
                           <table style="width:100%">

                               <tr>
                                   <td><b>Report Code:</b></td>
                                   <td>{{ $processing->id }}</td>
                                   <td><b>Status</b></td>
                                   <td>{{ $processing->reportstatus }}</td>
                                   <td><b>Set Status:</b></td>
                                   <td>
                                       <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="reportstatus" id="reportstatus">
                                           <option value="{{ old('reportstatus') ? old('reportstatus') : $processing->reportstatus }}">
                                               {{ $processing->reportstatus }}
                                           </option>
                                           <option value="Validating">For Validation</option>
                                           <option value="Dispatched">Dispatched</option>
                                           <option value="Processing">Processing</option>
                                           <option value="Unresolved">Unresolved</option>
                                           <option value="Resolved">Resolved</option>
                                       </select>
                                   </td>
                               </tr>
                           </table>
                       </div>
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->irf_entry }}" name="irf_entry" id="irf_entry">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Copy For</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->copy_for }}" name="copy_for" id="copy_for">
                                           </div>
                                           <div class="heading2">
                                               INSTRUCTIONS: Refer to PNP SOP on ‘Recording of Incidents in the Police Blotter’ in
                                               filling up this form. This Incident Record Form (IRF) may be reproduced,
                                               photocopied, and/or downloaded from the DIDM website, www.didm.pnp.gov.ph.
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time Reported</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->created_at }} " name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->date }} {{ $processing->time }}" name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->location }}" name="location" id="location">
                                           </div>
                                           <br><br><br>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "A" - REPORTING PERSON
                                               </h2>
                                           </div>

                                           <div class="col-sm-3">

                                               <label class="form-label">Family Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->lName }}" name="lName" id="lName">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->fName }}" name="fName" id="fName" 
                                               >
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->mName }}" name="mName" id="mName"
                                               @disabled (old('mName', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->qualifier }}" name="qualifier" id="qualifier"
                                               @disabled (old('qualifier', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->nickname }}" name="nickname" id="nickname"
                                               @disabled (old('nickname', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input required type="text" class="form-control form-control-sm" value="{{ $processing->citizenship }}" name="citizenship" id="citizenship"
                                               @disabled (old('citizenship', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select required class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sex" id="sex"
                                               @disabled (old('sex', $processing->isGuest) == 'No')>
                                                   <option value="{{ $processing->sex }}">
                                                       {{ $processing->sex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>

                                               <select required class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="civilStatus" id="civilStatus"
                                               @disabled (old('civilStatus', $processing->isGuest) == 'No')>
                                                   <option value="{{ $processing->civilStatus }}">
                                                       {{ $processing->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input  required type="date" class="form-control form-control-sm" value="{{ $processing->birthDate }}" name="birthDate" id="birthDate"
                                               @disabled (old('birthDate', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input  required type="text" class="form-control form-control-sm" value="{{ $processing->age }}" name="age" id="age"
                                               @disabled (old('age', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->placeofbirth }}" name="placeofbirth" id="placeofbirth"
                                               @disabled (old('placeofbirth', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->homephone }}" name="homephone" id="homephone"
                                               @disabled (old('homephone', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->mobileNum }}" name="mobileNum" id="mobileNum"
                                              >
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->street }}" name="street" id="street"
                                               @disabled (old('street', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->sitio }}" name="sitio" id="sitio"
                                               @disabled (old('sitio', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  required type="text" class="form-control form-control-sm" value="{{ $processing->barangay }}" name="barangay" id="barangay"
                                               @disabled (old('barangay', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  required type="text" class="form-control form-control-sm" value="{{ $processing->municipality }}" name="municipality" id="municipality"
                                               @disabled (old('municipality', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  required type="text" class="form-control form-control-sm" value="{{ $processing->province }}" name="province" id="province"
                                               @disabled (old('province', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->street2 }}" name="street2" id="street2"
                                               @disabled (old('street2', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->sitio2 }}" name="sitio2" id="sitio2"
                                               @disabled (old('sitio2', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->barangay2 }}" name="barangay2" id="barangay2"
                                               @disabled (old('barangay2', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->municipality2 }}" name="municipality2" id="municipality2"
                                               @disabled (old('municipality2', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->province2 }}" name="province2" id="province2"
                                               @disabled (old('province2', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->highesteduc }}" name="highesteduc" id="highesteduc"
                                               @disabled (old('highesteduc', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->occupation }}" name="occupation" id="occupation"
                                               @disabled (old('occupation', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">ID Card Presented</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->id_type }}" name="id_type" id="id_type"
                                               @disabled (old('id_type', $processing->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Email Address(if any)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $processing->email }}" name="email" id="email"
                                               @disabled (old('email', $processing->isGuest) == 'No')>
                                           </div>


                                           <div class="heading2">
                                               <h2>
                                                   ITEM "B" - SUSPECT'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->suslname }}" name="suslname" id="suslname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susfname }}" name="susfname" id="susfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susmname }}" name="susmname" id="susmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susqualifier }}" name="susqualifier" id="susqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susnickname }}" name="susnickname" id="susnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->suscitizenship }}" name="suscitizenship" id="suscitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sussex" id="sussex">
                                                   <option value="{{ $processing->sussex }}">
                                                       {{ $processing->sussex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscivilstatus" id="suscivilstatus">
                                                   <option value="{{ $processing->suscivilstatus }}">
                                                       {{ $processing->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $processing->susbirth }}" name="susbirth" id="susbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susage }}" name="susage" id="susage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susplaceofbirth }}" name="susplaceofbirth" id="susplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->sushomephone }}" name="sushomephone" id="sushomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susmobilephone }}" name="susmobilephone" id="susmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susstreet }}" name="susstreet" id="susstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->sussitio }}" name="sussitio" id="sussitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susbarangay }}" name="susbarangay" id="susbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susmunicipality }}" name="susmunicipality" id="susmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susprovince }}" name="susprovince" id="susprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susstreet2 }}" name="susstreet2" id="susstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->sussitio2 }}" name="sussitio2" id="sussitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susbarangay2 }}" name="susbarangay2" id="susbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susmunicipality2 }}" name="susmunicipality2" id="susmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susprovince2 }}" name="susprovince2" id="susprovince2">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->sushighesteduc }}" name="sushighesteduc" id="sushighesteduc">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susoccupation }}" name="susoccupation" id="susoccupation">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Word Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->suswordaddress }}" name="suswordaddress" id="suswordaddress">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Relation to Victim</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susrelationtovictim }}" name="susrelationtovictim" id="susrelationtovictim">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Email Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susemail }}" name="susemail" id="susemail">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">If AFP/PNP Personnel: RANK</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susifrank }}" name="susifrank" id="susifrank">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Unit Assignment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susunitassignment }}" name="susunitassignment" id="susunitassignment">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Group Affiliation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susgroup }}" name="susgroup" id="susgroup">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">With previous criminal record?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscrimerecord" id="suscrimerecord">
                                                   <option value="{{ $processing->suscrimerecord }}">
                                                       {{ $processing->suscrimerecord }}
                                                   </option>
                                                   <option value="Yes">Yes</option>
                                                   <option value="No">No</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Status of Previous Case</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susstatusrecord }}" name="susstatusrecord" id="susstatusrecord">
                                           </div>
                                           <div class="col-sm-3">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">(if yes, please specify)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susspecifyrecord }}" name="susspecifyrecord" id="susspecifyrecord">

                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Height</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susheight }}" name="susheight" id="susheight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Weight</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susweight }}" name="susweight" id="susweight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Build</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susbuild }}" name="susbuild" id="susbuild">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Color of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->suscoloreyes }}" name="suscoloreyes" id="suscoloreyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susdescripeyes }}" name="susdescripeyes" id="susdescripeyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Hair</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">Under the Influence?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="susinfluence" id="susinfluence">
                                                   <option value="{{ $processing->susinfluence }}">
                                                       {{ $processing->susinfluence }}
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chilguardian }}" name="chilguardian" id="chilguardian">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Guardian Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chilguardianaddress }}" name="chilguardianaddress" id="chilguardianaddress">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chilhomephone }}" name="chilhomephone" id="chilhomephone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chilmobilephone }}" name="chilmobilephone" id="chilmobilephone">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "C" - VICTIM'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->viclnam }}" name="viclnam" id="viclnam">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicfname }}" name="vicfname" id="vicfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicmname }}" name="vicmname" id="vicmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicqualifier }}" name="vicqualifier" id="vicqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicnickname }}" name="vicnickname" id="vicnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->viccitizenship }}" name="viccitizenship" id="viccitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="vicsex" id="vicsex">
                                                   <option value="{{ $processing->vicsex }}">
                                                       {{ $processing->vicsex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="viccivilstat" id="viccivilstat">
                                                   <option value="{{ $processing->viccivilstat }}">
                                                       {{ $processing->viccivilstat }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $processing->vicbirth }}" name="vicbirth" id="vicbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicage }}" name="vicage" id="vicage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicplaceofbirth }}" name="vicplaceofbirth" id="vicplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vichomephone }}" name="vichomephone" id="vichomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicmobilephone }}" name="vicmobilephone" id="vicmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicstreet }}" name="vicstreet" id="vicstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicsitio }}" name="vicsitio" id="vicsitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicbarangay }}" name="vicbarangay" id="vicbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicmunicipality }}" name="vicmunicipality" id="vicmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicprovince }}" name="vicprovince" id="vicprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicstreet2 }}" name="vicstreet2" id="vicstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicsitio2 }}" name="vicsitio2" id="vicsitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicbarangay2 }}" name="vicbarangay2" id="vicbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicmunicipality2 }}" name="vicmunicipality2" id="vicmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->vicprovince2 }}" name="vicprovince2" id="vicprovince2">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "D" - NARRATIVE OF INCIDENT
                                               </h2>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident </label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date/Time of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->date }} {{ $processing->time }}" name="date" id="date">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->location }}" name="location" id="location">
                                           </div>
                                           <div class="heading3">
                                               ENTER IN DETAIL THE NARRATIVE OF THE INCIDENT OR EVENT, ANSWERING THE WHO, WHAT,
                                               WHEN, WHERE, WHY AND HOW OF REPORTING.
                                           </div>
                                           <div class="form-floating">
                                               <textarea class="form-control" value="{{ $processing->narrative }}" name="narrative" id="narrative" aria-label="Disabled input example" [disabled]="valuebtn" style="height: 464px">{{ $processing->narrative }}</textarea>
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
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $processing->fName }} {{ $processing->lName }}" name="name" id="name">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->administering_officer }}" name="administering_officer" id="administering_officer">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->deskofficer_name }}" name="deskofficer_name" id="deskofficer_name">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Signature of Desk Officer</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">BLOTTER ENTRY NR:</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->blotter_entry }}" name="blotter_entry" id="blotter_entry">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->administering_officer }}" name="" id="">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Telephone</label>

                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->administering_officer_phone }}" name="administering_officer_phone" id="administering_officer_phone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Investigator-on-Case </label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->investigator_on_case }}" name="investigator_on_case" id="investigator_on_case">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->investigator_on_case_phone }}" name="investigator_on_case_phone" id="investigator_on_case_phone">
                                           </div>

                                           <div class="col-sm-3">
                                               <label class="form-label">Name of Chief/Head of Office</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chief_of_head }}" name="chief_of_head" id="chief_of_head">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $processing->chief_of_head_phone }}" name="chief_of_head_phone" id="chief_of_head_phone">
                                           </div>


                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                       <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           <button type="button submit" class="btn btn-primary">Save changes</button>
                       </div>
                   </form>
               </div>

           </div>
       </div>
   </div>
   @endforeach

   <!--  -->
   <!--  -->
   <!--  -->
   <!-- UNRESOLve -->
   @foreach ($listUnresolve as $unresolve)
   <div class="modal fade" id="modalunresolve{{ $unresolve->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
               <form method="POST" action="{{route('admin_updatereport',['preport' => $unresolve->id, 'xsd' => $unresolve->userid])}}">
                       @csrf
                       @method('PUT')
                       <div class="reportdet3">
                           <table style="width:100%">

                               <tr>
                                   <td><b>Report Code:</b></td>
                                   <td>{{ $unresolve->id }}</td>
                                   <td><b>Status</b></td>
                                   <td>{{ $unresolve->reportstatus }}</td>
                                   <td><b>Set Status:</b></td>
                                   <td>
                                       <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="reportstatus" id="reportstatus">
                                           <option value="{{ old('reportstatus') ? old('reportstatus') : $unresolve->reportstatus }}">
                                               {{ $unresolve->reportstatus }}
                                           </option>
                                           <option value="Validating">For Validation</option>
                                           <option value="Dispatched">Dispatched</option>
                                           <option value="Processing">Processing</option>
                                           <option value="Unresolved">Unresolved</option>
                                           <option value="Resolved">Resolved</option>
                                       </select>
                                   </td>
                               </tr>
                           </table>
                       </div>
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->irf_entry }}" name="irf_entry" id="irf_entry">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Copy For</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->copy_for }}" name="copy_for" id="copy_for">
                                           </div>
                                           <div class="heading2">
                                               INSTRUCTIONS: Refer to PNP SOP on ‘Recording of Incidents in the Police Blotter’ in
                                               filling up this form. This Incident Record Form (IRF) may be reproduced,
                                               photocopied, and/or downloaded from the DIDM website, www.didm.pnp.gov.ph.
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time Reported</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->created_at }} " name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->date }} {{ $unresolve->time }}" name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->location }}" name="location" id="location">
                                           </div>
                                           <br><br><br>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "A" - REPORTING PERSON
                                               </h2>
                                           </div>

                                           <div class="col-sm-3">

                                               <label class="form-label">Family Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->lName }}" name="lName" id="lName">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->fName }}" name="fName" id="fName" 
                                               >
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->mName }}" name="mName" id="mName"
                                               @disabled (old('mName', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->qualifier }}" name="qualifier" id="qualifier"
                                               @disabled (old('qualifier', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->nickname }}" name="nickname" id="nickname"
                                               @disabled (old('nickname', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->citizenship }}" name="citizenship" id="citizenship"
                                               @disabled (old('citizenship', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sex" id="sex"
                                               @disabled (old('sex', $unresolve->isGuest) == 'No')>
                                                   <option value="{{ $unresolve->sex }}">
                                                       {{ $unresolve->sex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="civilStatus" id="civilStatus"
                                               @disabled (old('civilStatus', $unresolve->isGuest) == 'No')>
                                                   <option value="{{ $unresolve->civilStatus }}">
                                                       {{ $unresolve->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input  type="date" class="form-control form-control-sm" value="{{ $unresolve->birthDate }}" name="birthDate" id="birthDate"
                                               @disabled (old('birthDate', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->age }}" name="age" id="age"
                                               @disabled (old('age', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->placeofbirth }}" name="placeofbirth" id="placeofbirth"
                                               @disabled (old('placeofbirth', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->homephone }}" name="homephone" id="homephone"
                                               @disabled (old('homephone', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->mobileNum }}" name="mobileNum" id="mobileNum"
                                              >
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->street }}" name="street" id="street"
                                               @disabled (old('street', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->sitio }}" name="sitio" id="sitio"
                                               @disabled (old('sitio', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->barangay }}" name="barangay" id="barangay"
                                               @disabled (old('barangay', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->municipality }}" name="municipality" id="municipality"
                                               @disabled (old('municipality', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->province }}" name="province" id="province"
                                               @disabled (old('province', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->street2 }}" name="street2" id="street2"
                                               @disabled (old('street2', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->sitio2 }}" name="sitio2" id="sitio2"
                                               @disabled (old('sitio2', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->barangay2 }}" name="barangay2" id="barangay2"
                                               @disabled (old('barangay2', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->municipality2 }}" name="municipality2" id="municipality2"
                                               @disabled (old('municipality2', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->province2 }}" name="province2" id="province2"
                                               @disabled (old('province2', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->highesteduc }}" name="highesteduc" id="highesteduc"
                                               @disabled (old('highesteduc', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->occupation }}" name="occupation" id="occupation"
                                               @disabled (old('occupation', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">ID Card Presented</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->id_type }}" name="id_type" id="id_type"
                                               @disabled (old('id_type', $unresolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Email Address(if any)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $unresolve->email }}" name="email" id="email"
                                               @disabled (old('email', $unresolve->isGuest) == 'No')>
                                           </div>


                                           <div class="heading2">
                                               <h2>
                                                   ITEM "B" - SUSPECT'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->suslname }}" name="suslname" id="suslname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susfname }}" name="susfname" id="susfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susmname }}" name="susmname" id="susmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susqualifier }}" name="susqualifier" id="susqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susnickname }}" name="susnickname" id="susnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->suscitizenship }}" name="suscitizenship" id="suscitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sussex" id="sussex">
                                                   <option value="{{ $unresolve->sussex }}">
                                                       {{ $unresolve->sussex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscivilstatus" id="suscivilstatus">
                                                   <option value="{{ $unresolve->suscivilstatus }}">
                                                       {{ $unresolve->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $unresolve->susbirth }}" name="susbirth" id="susbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susage }}" name="susage" id="susage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susplaceofbirth }}" name="susplaceofbirth" id="susplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->sushomephone }}" name="sushomephone" id="sushomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susmobilephone }}" name="susmobilephone" id="susmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susstreet }}" name="susstreet" id="susstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->sussitio }}" name="sussitio" id="sussitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susbarangay }}" name="susbarangay" id="susbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susmunicipality }}" name="susmunicipality" id="susmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susprovince }}" name="susprovince" id="susprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susstreet2 }}" name="susstreet2" id="susstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->sussitio2 }}" name="sussitio2" id="sussitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susbarangay2 }}" name="susbarangay2" id="susbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susmunicipality2 }}" name="susmunicipality2" id="susmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susprovince2 }}" name="susprovince2" id="susprovince2">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->sushighesteduc }}" name="sushighesteduc" id="sushighesteduc">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susoccupation }}" name="susoccupation" id="susoccupation">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Word Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->suswordaddress }}" name="suswordaddress" id="suswordaddress">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Relation to Victim</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susrelationtovictim }}" name="susrelationtovictim" id="susrelationtovictim">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Email Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susemail }}" name="susemail" id="susemail">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">If AFP/PNP Personnel: RANK</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susifrank }}" name="susifrank" id="susifrank">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Unit Assignment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susunitassignment }}" name="susunitassignment" id="susunitassignment">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Group Affiliation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susgroup }}" name="susgroup" id="susgroup">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">With previous criminal record?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscrimerecord" id="suscrimerecord">
                                                   <option value="{{ $unresolve->suscrimerecord }}">
                                                       {{ $unresolve->suscrimerecord }}
                                                   </option>
                                                   <option value="Yes">Yes</option>
                                                   <option value="No">No</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Status of Previous Case</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susstatusrecord }}" name="susstatusrecord" id="susstatusrecord">
                                           </div>
                                           <div class="col-sm-3">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">(if yes, please specify)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susspecifyrecord }}" name="susspecifyrecord" id="susspecifyrecord">

                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Height</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susheight }}" name="susheight" id="susheight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Weight</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susweight }}" name="susweight" id="susweight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Build</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susbuild }}" name="susbuild" id="susbuild">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Color of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->suscoloreyes }}" name="suscoloreyes" id="suscoloreyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susdescripeyes }}" name="susdescripeyes" id="susdescripeyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Hair</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">Under the Influence?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="susinfluence" id="susinfluence">
                                                   <option value="{{ $unresolve->susinfluence }}">
                                                       {{ $unresolve->susinfluence }}
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chilguardian }}" name="chilguardian" id="chilguardian">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Guardian Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chilguardianaddress }}" name="chilguardianaddress" id="chilguardianaddress">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chilhomephone }}" name="chilhomephone" id="chilhomephone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chilmobilephone }}" name="chilmobilephone" id="chilmobilephone">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "C" - VICTIM'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->viclnam }}" name="viclnam" id="viclnam">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicfname }}" name="vicfname" id="vicfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicmname }}" name="vicmname" id="vicmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicqualifier }}" name="vicqualifier" id="vicqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicnickname }}" name="vicnickname" id="vicnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->viccitizenship }}" name="viccitizenship" id="viccitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="vicsex" id="vicsex">
                                                   <option value="{{ $unresolve->vicsex }}">
                                                       {{ $unresolve->vicsex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="viccivilstat" id="viccivilstat">
                                                   <option value="{{ $unresolve->viccivilstat }}">
                                                       {{ $unresolve->viccivilstat }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $unresolve->vicbirth }}" name="vicbirth" id="vicbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicage }}" name="vicage" id="vicage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicplaceofbirth }}" name="vicplaceofbirth" id="vicplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vichomephone }}" name="vichomephone" id="vichomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicmobilephone }}" name="vicmobilephone" id="vicmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicstreet }}" name="vicstreet" id="vicstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicsitio }}" name="vicsitio" id="vicsitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicbarangay }}" name="vicbarangay" id="vicbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicmunicipality }}" name="vicmunicipality" id="vicmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicprovince }}" name="vicprovince" id="vicprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicstreet2 }}" name="vicstreet2" id="vicstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicsitio2 }}" name="vicsitio2" id="vicsitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicbarangay2 }}" name="vicbarangay2" id="vicbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicmunicipality2 }}" name="vicmunicipality2" id="vicmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->vicprovince2 }}" name="vicprovince2" id="vicprovince2">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "D" - NARRATIVE OF INCIDENT
                                               </h2>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident </label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date/Time of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->date }} {{ $unresolve->time }}" name="date" id="date">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->location }}" name="location" id="location">
                                           </div>
                                           <div class="heading3">
                                               ENTER IN DETAIL THE NARRATIVE OF THE INCIDENT OR EVENT, ANSWERING THE WHO, WHAT,
                                               WHEN, WHERE, WHY AND HOW OF REPORTING.
                                           </div>
                                           <div class="form-floating">
                                               <textarea class="form-control" value="{{ $unresolve->narrative }}" name="narrative" id="narrative" aria-label="Disabled input example" [disabled]="valuebtn" style="height: 464px">{{ $unresolve->narrative }}</textarea>
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
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $unresolve->fName }} {{ $unresolve->lName }}" name="name" id="name">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->administering_officer }}" name="administering_officer" id="administering_officer">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->deskofficer_name }}" name="deskofficer_name" id="deskofficer_name">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Signature of Desk Officer</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">BLOTTER ENTRY NR:</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->blotter_entry }}" name="blotter_entry" id="blotter_entry">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->administering_officer }}" name="" id="">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Telephone</label>

                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->administering_officer_phone }}" name="administering_officer_phone" id="administering_officer_phone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Investigator-on-Case </label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->investigator_on_case }}" name="investigator_on_case" id="investigator_on_case">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->investigator_on_case_phone }}" name="investigator_on_case_phone" id="investigator_on_case_phone">
                                           </div>

                                           <div class="col-sm-3">
                                               <label class="form-label">Name of Chief/Head of Office</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chief_of_head }}" name="chief_of_head" id="chief_of_head">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $unresolve->chief_of_head_phone }}" name="chief_of_head_phone" id="chief_of_head_phone">
                                           </div>


                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                       <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           <button type="button submit" class="btn btn-primary">Save changes</button>
                       </div>
                   </form>
               </div>

           </div>
       </div>
   </div>
   @endforeach

   <!-- RESOLVE -->
   @foreach ($listResolve as $resolve)
   <div class="modal fade" id="modalresolve{{ $resolve->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
               <form method="POST" action="{{route('admin_updatereport',['preport' => $resolve->id, 'xsd' => $resolve->userid])}}">
                       @csrf
                       @method('PUT')
                       <div class="reportdet3">
                           <table style="width:100%">

                               <tr>
                                   <td><b>Report Code:</b></td>
                                   <td>{{ $resolve->id }}</td>
                                   <td><b>Status</b></td>
                                   <td>{{ $resolve->reportstatus }}</td>
                                   <td><b>Set Status:</b></td>
                                   <td>
                                       <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="reportstatus" id="reportstatus">
                                           <option value="{{ old('reportstatus') ? old('reportstatus') : $resolve->reportstatus }}">
                                               {{ $resolve->reportstatus }}
                                           </option>
                                           <option value="Validating">For Validation</option>
                                           <option value="Dispatched">Dispatched</option>
                                           <option value="Processing">Processing</option>
                                           <option value="Unresolved">Unresolved</option>
                                           <option value="Resolved">Resolved</option>
                                       </select>
                                   </td>
                               </tr>
                           </table>
                       </div>
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->irf_entry }}" name="irf_entry" id="irf_entry">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Copy For</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->copy_for }}" name="copy_for" id="copy_for">
                                           </div>
                                           <div class="heading2">
                                               INSTRUCTIONS: Refer to PNP SOP on ‘Recording of Incidents in the Police Blotter’ in
                                               filling up this form. This Incident Record Form (IRF) may be reproduced,
                                               photocopied, and/or downloaded from the DIDM website, www.didm.pnp.gov.ph.
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time Reported</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->created_at }} " name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date and Time of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->date }} {{ $resolve->time }}" name="" id="">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->location }}" name="location" id="location">
                                           </div>
                                           <br><br><br>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "A" - REPORTING PERSON
                                               </h2>
                                           </div>

                                           <div class="col-sm-3">

                                               <label class="form-label">Family Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->lName }}" name="lName" id="lName">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->fName }}" name="fName" id="fName" 
                                               >
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->mName }}" name="mName" id="mName"
                                               @disabled (old('mName', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->qualifier }}" name="qualifier" id="qualifier"
                                               @disabled (old('qualifier', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->nickname }}" name="nickname" id="nickname"
                                               @disabled (old('nickname', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->citizenship }}" name="citizenship" id="citizenship"
                                               @disabled (old('citizenship', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sex" id="sex"
                                               @disabled (old('sex', $resolve->isGuest) == 'No')>
                                                   <option value="{{ $resolve->sex }}">
                                                       {{ $resolve->sex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="civilStatus" id="civilStatus"
                                               @disabled (old('civilStatus', $resolve->isGuest) == 'No')>
                                                   <option value="{{ $resolve->civilStatus }}">
                                                       {{ $resolve->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input  type="date" class="form-control form-control-sm" value="{{ $resolve->birthDate }}" name="birthDate" id="birthDate"
                                               @disabled (old('birthDate', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->age }}" name="age" id="age"
                                               @disabled (old('age', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->placeofbirth }}" name="placeofbirth" id="placeofbirth"
                                               @disabled (old('placeofbirth', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->homephone }}" name="homephone" id="homephone"
                                               @disabled (old('homephone', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->mobileNum }}" name="mobileNum" id="mobileNum"
                                              >
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->street }}" name="street" id="street"
                                               @disabled (old('street', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->sitio }}" name="sitio" id="sitio"
                                               @disabled (old('sitio', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->barangay }}" name="barangay" id="barangay"
                                               @disabled (old('barangay', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->municipality }}" name="municipality" id="municipality"
                                               @disabled (old('municipality', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->province }}" name="province" id="province"
                                               @disabled (old('province', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->street2 }}" name="street2" id="street2"
                                               @disabled (old('street2', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->sitio2 }}" name="sitio2" id="sitio2"
                                               @disabled (old('sitio2', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->barangay2 }}" name="barangay2" id="barangay2"
                                               @disabled (old('barangay2', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->municipality2 }}" name="municipality2" id="municipality2"
                                               @disabled (old('municipality2', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->province2 }}" name="province2" id="province2"
                                               @disabled (old('province2', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->highesteduc }}" name="highesteduc" id="highesteduc"
                                               @disabled (old('highesteduc', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->occupation }}" name="occupation" id="occupation"
                                               @disabled (old('occupation', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">ID Card Presented</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->id_type }}" name="id_type" id="id_type"
                                               @disabled (old('id_type', $resolve->isGuest) == 'No')>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Email Address(if any)</label>
                                               <input  type="text" class="form-control form-control-sm" value="{{ $resolve->email }}" name="email" id="email"
                                               @disabled (old('email', $resolve->isGuest) == 'No')>
                                           </div>


                                           <div class="heading2">
                                               <h2>
                                                   ITEM "B" - SUSPECT'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->suslname }}" name="suslname" id="suslname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susfname }}" name="susfname" id="susfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susmname }}" name="susmname" id="susmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susqualifier }}" name="susqualifier" id="susqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susnickname }}" name="susnickname" id="susnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->suscitizenship }}" name="suscitizenship" id="suscitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>

                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="sussex" id="sussex">
                                                   <option value="{{ $resolve->sussex }}">
                                                       {{ $resolve->sussex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscivilstatus" id="suscivilstatus">
                                                   <option value="{{ $resolve->suscivilstatus }}">
                                                       {{ $resolve->reportstatus }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>
                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $resolve->susbirth }}" name="susbirth" id="susbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susage }}" name="susage" id="susage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susplaceofbirth }}" name="susplaceofbirth" id="susplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->sushomephone }}" name="sushomephone" id="sushomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susmobilephone }}" name="susmobilephone" id="susmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susstreet }}" name="susstreet" id="susstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->sussitio }}" name="sussitio" id="sussitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susbarangay }}" name="susbarangay" id="susbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susmunicipality }}" name="susmunicipality" id="susmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susprovince }}" name="susprovince" id="susprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susstreet2 }}" name="susstreet2" id="susstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->sussitio2 }}" name="sussitio2" id="sussitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susbarangay2 }}" name="susbarangay2" id="susbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susmunicipality2 }}" name="susmunicipality2" id="susmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susprovince2 }}" name="susprovince2" id="susprovince2">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Highest Educational Attainment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->sushighesteduc }}" name="sushighesteduc" id="sushighesteduc">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Occupation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susoccupation }}" name="susoccupation" id="susoccupation">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Word Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->suswordaddress }}" name="suswordaddress" id="suswordaddress">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Relation to Victim</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susrelationtovictim }}" name="susrelationtovictim" id="susrelationtovictim">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Email Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susemail }}" name="susemail" id="susemail">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">If AFP/PNP Personnel: RANK</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susifrank }}" name="susifrank" id="susifrank">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Unit Assignment</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susunitassignment }}" name="susunitassignment" id="susunitassignment">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Group Affiliation</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susgroup }}" name="susgroup" id="susgroup">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">With previous criminal record?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="suscrimerecord" id="suscrimerecord">
                                                   <option value="{{ $resolve->suscrimerecord }}">
                                                       {{ $resolve->suscrimerecord }}
                                                   </option>
                                                   <option value="Yes">Yes</option>
                                                   <option value="No">No</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Status of Previous Case</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susstatusrecord }}" name="susstatusrecord" id="susstatusrecord">
                                           </div>
                                           <div class="col-sm-3">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">(if yes, please specify)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susspecifyrecord }}" name="susspecifyrecord" id="susspecifyrecord">

                                           </div>
                                           <div class="col-sm-2">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Height</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susheight }}" name="susheight" id="susheight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Weight</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susweight }}" name="susweight" id="susweight">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Build</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susbuild }}" name="susbuild" id="susbuild">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Color of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->suscoloreyes }}" name="suscoloreyes" id="suscoloreyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Eyes</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susdescripeyes }}" name="susdescripeyes" id="susdescripeyes">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Description of Hair</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-3">

                                               <label class="form-label">Under the Influence?</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="susinfluence" id="susinfluence">
                                                   <option value="{{ $resolve->susinfluence }}">
                                                       {{ $resolve->susinfluence }}
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chilguardian }}" name="chilguardian" id="chilguardian">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Guardian Address</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chilguardianaddress }}" name="chilguardianaddress" id="chilguardianaddress">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chilhomephone }}" name="chilhomephone" id="chilhomephone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chilmobilephone }}" name="chilmobilephone" id="chilmobilephone">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "C" - VICTIM'S DATA
                                               </h2>
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Family Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->viclnam }}" name="viclnam" id="viclnam">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">First Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicfname }}" name="vicfname" id="vicfname">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Middle Name</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicmname }}" name="vicmname" id="vicmname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Qualifier</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicqualifier }}" name="vicqualifier" id="vicqualifier">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Nickname</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicnickname }}" name="vicnickname" id="vicnickname">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Citizenship</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->viccitizenship }}" name="viccitizenship" id="viccitizenship">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Sex</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="vicsex" id="vicsex">
                                                   <option value="{{ $resolve->vicsex }}">
                                                       {{ $resolve->vicsex }}
                                                   </option>
                                                   <option value="Male">Male</option>
                                                   <option value="Female">Female</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Civil Status</label>
                                               <select class="form-select form-select-sm mr-4" aria-label="form-select-lg example" name="viccivilstat" id="viccivilstat">
                                                   <option value="{{ $resolve->viccivilstat }}">
                                                       {{ $resolve->viccivilstat }}
                                                   </option>
                                                   <option value="Single">Single</option>
                                                   <option value="Married">Married</option>
                                                   <option value="Divorced">Divorced</option>
                                                   <option value="Widower">Widower</option>

                                               </select>
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Date of Birth</label>
                                               <input type="date" class="form-control form-control-sm" value="{{ $resolve->vicbirth }}" name="vicbirth" id="vicbirth">
                                           </div>
                                           <div class="col-sm-1">
                                               <label class="form-label">Age</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicage }}" name="vicage" id="vicage">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Place of Birth</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicplaceofbirth }}" name="vicplaceofbirth" id="vicplaceofbirth">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Home Phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vichomephone }}" name="vichomephone" id="vichomephone">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Mobile phone</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicmobilephone }}" name="vicmobilephone" id="vicmobilephone">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Current Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicstreet }}" name="vicstreet" id="vicstreet">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicsitio }}" name="vicsitio" id="vicsitio">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicbarangay }}" name="vicbarangay" id="vicbarangay">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicmunicipality }}" name="vicmunicipality" id="vicmunicipality">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicprovince }}" name="vicprovince" id="vicprovince">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Other Address (House Number/Street)</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicstreet2 }}" name="vicstreet2" id="vicstreet2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Village/Sitio</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicsitio2 }}" name="vicsitio2" id="vicsitio2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Barangay</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicbarangay2 }}" name="vicbarangay2" id="vicbarangay2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Town/City</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicmunicipality2 }}" name="vicmunicipality2" id="vicmunicipality2">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">Province</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->vicprovince2 }}" name="vicprovince2" id="vicprovince2">
                                           </div>
                                           <div class="heading2">
                                               <h2>
                                                   ITEM "D" - NARRATIVE OF INCIDENT
                                               </h2>
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Type of Incident </label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->reportType }}" name="reportType" id="reportType">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Date/Time of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->date }} {{ $resolve->time }}" name="date" id="date">
                                           </div>
                                           <div class="col-sm-4">
                                               <label class="form-label">Place of Incident</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->location }}" name="location" id="location">
                                           </div>
                                           <div class="heading3">
                                               ENTER IN DETAIL THE NARRATIVE OF THE INCIDENT OR EVENT, ANSWERING THE WHO, WHAT,
                                               WHEN, WHERE, WHY AND HOW OF REPORTING.
                                           </div>
                                           <div class="form-floating">
                                               <textarea class="form-control" value="{{ $resolve->narrative }}" name="narrative" id="narrative" aria-label="Disabled input example" [disabled]="valuebtn" style="height: 464px">{{ $resolve->narrative }}</textarea>
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
                                               <input disabled type="text" class="form-control form-control-sm" value="{{ $resolve->fName }} {{ $resolve->lName }}" name="name" id="name">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->administering_officer }}" name="administering_officer" id="administering_officer">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->deskofficer_name }}" name="deskofficer_name" id="deskofficer_name">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Signature of Desk Officer</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->susdescriphair }}" name="susdescriphair" id="susdescriphair">
                                           </div>
                                           <div class="col-sm-2">
                                               <label class="form-label">BLOTTER ENTRY NR:</label>
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->blotter_entry }}" name="blotter_entry" id="blotter_entry">
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
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->administering_officer }}" name="" id="">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Telephone</label>

                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->administering_officer_phone }}" name="administering_officer_phone" id="administering_officer_phone">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Investigator-on-Case </label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->investigator_on_case }}" name="investigator_on_case" id="investigator_on_case">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->investigator_on_case_phone }}" name="investigator_on_case_phone" id="investigator_on_case_phone">
                                           </div>

                                           <div class="col-sm-3">
                                               <label class="form-label">Name of Chief/Head of Office</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chief_of_head }}" name="chief_of_head" id="chief_of_head">
                                           </div>
                                           <div class="col-sm-3">
                                               <label class="form-label">Mobile Phone</label>
                                           </div>
                                           <div class="col-sm-3">
                                               <input type="text" class="form-control form-control-sm" value="{{ $resolve->chief_of_head_phone }}" name="chief_of_head_phone" id="chief_of_head_phone">
                                           </div>


                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                       <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           <button type="button submit" class="btn btn-primary">Save changes</button>
                       </div>
                   </form>
               </div>

           </div>
       </div>
   </div>
   @endforeach
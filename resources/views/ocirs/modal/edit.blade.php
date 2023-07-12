
<div class="modal fade modal-xl" id="UpdateProfile{{ Auth::user()->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Update Information</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          
            <div class="modal-body">
                <p>Note: You may not be able to edit other of your information for some validation
                    purposes.
                <p>
                @foreach ($users as $user)
                    {!! Form::model($users, [ 'method' => 'patch','route' => ['user.update', Auth::user()->id] ]) !!}
                    @endforeach
                <div class="mb-3">
                    <!-- {!! Form::label('qualifier', 'Qualifier') !!}
                    {!! Form::text('qualifier', $user->qualifier, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Qualifier</label>
                    <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->qualifier }}" name="qualifier" id="qualifier">
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('civilStatus', 'Civil Status') !!}
                    {!! Form::text('civilStatus', $user->civilStatus, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Civil Status</label>
                    <!-- <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->civilStatus }}" name="civilStatus" id="civilStatus"> -->
                    <select class="form-control" name="civilStatus">
                                    <option value="{{ Auth::user()->civilStatus }}">{{ Auth::user()->civilStatus }}</option>
                                    <option {{ old('civilStatus') === 'SINGLE' ? 'selected' : '' }} value="SINGLE">Single
                                    </option>
                                    <option {{ old('civilStatus') === 'MARRIED' ? 'selected' : '' }} value="MARRIED">
                                        Married</option>
                                    <option {{ old('civilStatus') === 'DIVORCED' ? 'selected' : '' }} value="DIVORCED">
                                        Divorced</option>
                                    <option {{ old('civilStatus') === 'WIDOWER' ? 'selected' : '' }} value="WIDOWER">
                                        Widower</option>
                                </select>
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('nickname', 'Nickname') !!}
                    {!! Form::text('nickname', $user->nickname, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Nickname</label>
                    <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->nickname }}" name="nickname" id="nickname">
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('occupation', 'Occupation') !!}
                    {!! Form::text('occupation', $user->occupation, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Occupation</label>
                    <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->occupation }}" name="occupation" id="occupation">
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('highesteduc', 'Highest Educational Attainment') !!}
                    {!! Form::text('highesteduc', $user->highesteduc, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Highest Educational Attainment</label>
                    <!-- <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->highesteduc }}" name="highesteduc" id="highesteduc"> -->
                    <select class="form-control" name="highesteduc">
                                    <option value="{{ Auth::user()->highesteduc }}">{{ Auth::user()->highesteduc }}</option>
                                    <option {{ old('highesteduc') === 'ELEMENTARY GRADUATE' ? 'selected' : '' }} value="ELEMENTARY GRADUATE">Elementary Graduate
                                    </option>
                                    <option {{ old('highesteduc') === 'HIGH SCHOOL GRADUATE' ? 'selected' : '' }} value="HIGH SCHOOL GRADUATE">
                                    High School Graduate</option>
                                    <option {{ old('highesteduc') === 'TVET GRADUATE' ? 'selected' : '' }} value="TVET GRADUATE">
                                    TVET Graduate</option>
                                    <option {{ old('highesteduc') === 'COLLEGE LEVEL' ? 'selected' : '' }} value="COLLEGE LEVEL">
                                    College Level</option>
                                    <option {{ old('highesteduc') === 'COLLEGE GRADUATE' ? 'selected' : '' }} value="COLLEGE GRADUATE">
                                    College Graduate</option>
                                </select>
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('placeofbirth', 'Place of Birth') !!}
                    {!! Form::text('placeofbirth', $user->placeofbirth, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Place of Birth</label>
                    <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->placeofbirth }}" name="placeofbirth" id="placeofbirth">
                </div>
                <div class="mb-3">
                    <!-- {!! Form::label('placeofbirth', 'Place of Birth') !!}
                    {!! Form::text('placeofbirth', $user->placeofbirth, ['class' => 'form-control']) !!} -->
                    <label class="form-label">Citizenship</label>
                    <input type="text" class="form-control" oninput="this.value = this.value.toUpperCase()" value="{{ Auth::user()->citizenship }}" name="citizenship" id="citizenship">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times"></i> Cancel</button>
                {{Form::button('<i class="fa fa-check-square-o"></i> Update', ['class' => 'btn btn-success', 'type' => 'submit'])}}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>


<!--  -->
<!--  -->
<!--  -->
<div class="modal fade modal-xl" id="UpdateContact{{ Auth::user()->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Update Contact</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Note: You may not be able to edit other of your information for some validation
                    purposes.
                <p>
                    {!! Form::model($users, [ 'method' => 'patch','route' => ['user.update', $user->id] ]) !!}
                <div class="mb-3">
                    {!! Form::label('street2', 'Street (Other Address)') !!}
                    {!! Form::text('street2', $user->street2, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('barangay2', 'Barangay (Other Address)') !!}
                    {!! Form::text('barangay2', $user->barangay2, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('municipality2', 'Municipality (Other Address)') !!}
                    {!! Form::text('municipality2', $user->municipality2, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('province2', 'Province (Other Address)') !!}
                    {!! Form::text('province2', $user->province2, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('mobileNum', 'Mobile Number') !!}
                    {!! Form::text('mobileNum', $user->mobileNum, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('homephone', 'Home Phone') !!}
                    {!! Form::text('homephone', $user->homephone, ['class' => 'form-control']) !!}
                </div>
                <div class="mb-3">
                    {!! Form::label('email', 'Email Address') !!}
                    {!! Form::text('email', $user->email, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times"></i> Cancel</button>
                {{Form::button('<i class="fa fa-check-square-o"></i> Update', ['class' => 'btn btn-success', 'type' => 'submit'])}}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
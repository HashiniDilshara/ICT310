<?php

//database connection

$severname = "localhost";
$username = "root";
$password = "";
$dbname = "ICT310";

$conn = new mysqli($severname,$username,$password,$dbname);

if ($conn -> connect_error){
    die("connection field:".$conn -> connect_error);
}
//validate input

if (empty($id)||empty($fname)||empty($lname)||empty($email)||empty($password)||empty($confirm_password)){
    die("all fields are requred")
}

//hash password

$hashed_password = password_hash($password,PASSWORD_DEFAULT);

//insert into database

$sql ="INSERT INTO RegistrationTableICT310 (id, first_name, last_name, email, password, confirm_password ) VALUES('$id','$fname','$lname','$email','$hashed_password','$hashed_password')";
$stmt=$conn->prepare($sql);
$stmt->bind_param("issss",$id,$fname,$lname,$email,$hashed_password,$hashed_password);

if($stmt->execute()){
    echo"registration successful";

    else

    echo "error".$conn->error;
}
$stmt->close();
$conn->close();

?>
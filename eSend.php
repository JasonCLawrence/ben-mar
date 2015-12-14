<?PHP
#==============================
# Jason C. Lawrence (edoCWorks)
#Company: String Line Media
#Client: Ben-Mar Construction
#Date: December 13, 2015
#==============================
#Catch Variables
$cust_name = $_POST['name'];
$cust_email = $_POST['email'];
$cust_msisdn = $_POST['msisdn'];
$cust_message = $_POST['message'];
#==============================

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($ch, CURLOPT_USERPWD, 'api:key-e7c0fe9f02ab3ad093e64e570d308947');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
  curl_setopt($ch, CURLOPT_URL, 
              'https://api.mailgun.net/v2/apps.shiftjamaica.com/messages');
  curl_setopt($ch, CURLOPT_POSTFIELDS, 
                array('from' => $cust_email,
                      'to' => 'jaysonclawrence@gmail.com',
                      'subject' => 'Quote Request',
                      'text' => $cust_message.'.'));
  $result = curl_exec($ch);
  curl_close($ch);
  echo $result;
?>
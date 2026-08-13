{{-- resources/views/emails/otp.blade.php --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification - Career Builder</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 20px 0;
        }
        .container {
            max-width: 520px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
            padding: 35px 30px 25px;
            text-align: center;
        }
        .logo {
            color: #ffffff;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        .logo-sub {
            color: rgba(255, 255, 255, 0.8);
            font-size: 13px;
            margin-top: 4px;
        }
        .content {
            padding: 35px 30px 25px;
        }
        .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 12px;
        }
        .message {
            font-size: 15px;
            color: #4a5568;
            line-height: 1.7;
            margin-bottom: 20px;
        }
        .otp-box {
            background: #f7fafc;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            border: 2px dashed #e2e8f0;
            margin: 20px 0;
        }
        .otp-code {
            font-size: 36px;
            font-weight: 700;
            color: #4e73df;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
        }
        .expiry-note {
            color: #a0aec0;
            font-size: 13px;
            text-align: center;
        }
        .divider {
            border: none;
            height: 1px;
            background: #e2e8f0;
            margin: 24px 0;
        }
        .footer {
            padding: 20px 30px 25px;
            background: #f7fafc;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer-text {
            color: #a0aec0;
            font-size: 12px;
            line-height: 1.6;
        }
        .footer-text a {
            color: #4e73df;
            text-decoration: none;
        }
        .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 4px 12px;
            border-radius: 20px;
            color: #ffffff;
            font-size: 11px;
            margin-top: 8px;
        }
        .security-box {
            background: #f7fafc;
            border-radius: 10px;
            padding: 16px 20px;
            border-left: 4px solid #4e73df;
            margin: 16px 0;
        }
        .security-box .title {
            font-weight: 600;
            color: #2d3748;
            font-size: 13px;
            margin-bottom: 2px;
        }
        .security-box .text {
            color: #718096;
            font-size: 13px;
            line-height: 1.5;
        }

        .logo-container {
                text-align: center;
                padding: 25px 20px 10px;
            }

            .logo {
                max-width: 180px;
                height: auto;
                display: inline-block;
            }

        @media (max-width: 600px) {
            .otp-code {
                font-size: 28px;
                letter-spacing: 5px;
            }
            .header {
                padding: 25px 20px 20px;
            }
            .content {
                padding: 25px 20px 20px;
            }
            .footer {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <!-- <div class="header">
            <div class="logo">🚀 Career Builder</div>
            <div class="logo-sub">Empowering Your Career Journey</div>
            <div class="badge">🔐 Secure Verification</div>
        </div> -->

        <div class="logo-container">
           <img
    src="{{ url('/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp') }}"
    alt="WB-MDFC Logo"
    width="180"
    style="display:block; margin:0 auto; border:0;"
>
        </div>


        <!-- Content -->
        <div class="content">
            <h1 class="greeting">Password Reset OTP</h1>
            
            <p class="message">
                We received a request to reset your password. Use the verification code below to continue.
            </p>

            <!-- OTP Box -->
            <div class="otp-box">
                <div style="font-size: 13px; color: #718096; margin-bottom: 8px;">
                    Your verification code is:
                </div>
                <div class="otp-code">{{ $code }}</div>
                <div style="margin-top: 8px;">
                    <span style="display: inline-block; background: #eef2ff; padding: 2px 12px; border-radius: 12px; font-size: 11px; color: #4e73df;">
                        ⏰ Expires in 10 minutes
                    </span>
                </div>
            </div>

            <!-- Security Box -->
            <div class="security-box">
                <div class="title">🔒 Keep your code secure</div>
                <div class="text">
                    Do not share this code with anyone. If you did not request this, please ignore this email.
                </div>
            </div>

            <p class="message" style="font-size: 13px; color: #a0aec0; margin-top: 8px;">
                This code is valid for 10 minutes. Enter it on the verification page to reset your password.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                © {{ date('Y') }} <a href="{{ url('/') }}">Career Builder</a>. All rights reserved.
            </div>
            <div class="footer-text" style="margin-top: 4px;">
                Built with ❤️ to empower careers
            </div>
        </div>
    </div>
</body>
</html>
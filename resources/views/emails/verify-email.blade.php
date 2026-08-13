<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - Career Builder</title>
    <style>
        /* Reset styles */
        body, table, td, p, a, div, span {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f4f7fc;
            padding: 20px 0;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header-gradient {
            background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
            padding: 40px 40px 30px;
            text-align: center;
        }
        
        .logo-text {
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 0.5px;
            display: inline-block;
        }
        
        .logo-subtitle {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            margin-top: 4px;
            letter-spacing: 0.3px;
        }
        
        .content {
            padding: 40px 40px 30px;
        }
        
        .greeting {
            font-size: 22px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 16px;
        }
        
        .message {
            font-size: 16px;
            color: #4a5568;
            line-height: 1.7;
            margin-bottom: 20px;
        }
        
        .divider {
            border: none;
            height: 1px;
            background: linear-gradient(to right, #e2e8f0, #cbd5e0, #e2e8f0);
            margin: 28px 0;
        }
        
        .button-container {
            text-align: center;
            margin: 32px 0;
        }
        
        .btn-verify {
            display: inline-block;
            padding: 16px 48px;
            background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
            color: #ffffff;
            font-size: 17px;
            font-weight: 600;
            text-decoration: none;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(78, 115, 223, 0.4);
            transition: all 0.3s ease;
        }
        
        .btn-verify:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(78, 115, 223, 0.5);
        }
        
        .btn-verify i {
            margin-right: 10px;
        }
        
        .expiry-note {
            text-align: center;
            color: #a0aec0;
            font-size: 13px;
            margin: 16px 0 24px;
        }
        
        .security-box {
            background: #f7fafc;
            border-radius: 12px;
            padding: 20px 24px;
            border-left: 4px solid #4e73df;
            margin: 24px 0;
        }
        
        .security-box .title {
            font-weight: 600;
            color: #2d3748;
            font-size: 14px;
            margin-bottom: 4px;
        }
        
        .security-box .text {
            color: #718096;
            font-size: 14px;
            line-height: 1.6;
        }
        
        .footer {
            padding: 30px 40px 25px;
            background: #f7fafc;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        
        .footer-text {
            color: #a0aec0;
            font-size: 13px;
            line-height: 1.6;
        }
        
        .footer-text a {
            color: #4e73df;
            text-decoration: none;
        }
        
        .footer-text a:hover {
            text-decoration: underline;
        }
        
        .footer-links {
            margin-top: 12px;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .footer-links a {
            color: #a0aec0;
            font-size: 12px;
            text-decoration: none;
        }
        
        .footer-links a:hover {
            color: #4e73df;
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
        
        @media (max-width: 600px) {
            .header-gradient {
                padding: 30px 20px 25px;
            }
            
            .content {
                padding: 30px 20px 25px;
            }
            
            .footer {
                padding: 25px 20px 20px;
            }
            
            .btn-verify {
                padding: 14px 32px;
                font-size: 15px;
                display: block;
            }
            
            .greeting {
                font-size: 19px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Gradient -->
      <div class="header-gradient">
             <img
                src="{{ url('/images/wb-wbmdfc-logo-6985ea3b0f2a9.webp') }}"
                alt="WB-MDFC Logo"
                width="180"
                style="display:block; margin:0 auto; border:0;"
            >
            <div class="logo-subtitle">Empowering Your Career Journey</div>
            <div class="badge">🔐 Secure Verification</div>
        </div>

        <!-- Content -->
        <div class="content">
            <h1 class="greeting">Hello {{ $userName }}! 👋</h1>
            
            <p class="message">
                Thank you for choosing <strong>Career Builder</strong>! We're excited to help you build your career journey.
            </p>
            
            <p class="message">
                Please verify your email address to get started. Click the button below to confirm your account.
            </p>

            <!-- Divider -->
            <hr class="divider">

            <!-- Verify Button -->
            <div class="button-container">
                <a href="{{ $url }}" class="btn-verify">
                    ✉️ Verify Email Address
                </a>
            </div>

            <div class="expiry-note">
                ⏰ This link will expire in {{ config('auth.verification.expire', 60) }} minutes.
            </div>

            <!-- Security Box -->
            <div class="security-box">
                <div class="title">🔒 Why verify your email?</div>
                <div class="text">
                    Verifying your email ensures you receive important updates, notifications, 
                    and career opportunities. It also helps us keep your account secure.
                </div>
            </div>

            <!-- Additional Info -->
            <p class="message" style="font-size: 14px; color: #a0aec0; margin-top: 16px;">
                If you did not create an account with Career Builder, please ignore this email.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                © {{ $year }} <a href="{{ url('/') }}">Career Builder</a>. All rights reserved.
            </div>
            <div class="footer-text" style="margin-top: 4px; font-size: 12px;">
                Built with ❤️ to empower careers
            </div>
            <div class="footer-links">
                <a href="{{ url('/privacy-policy') }}">Privacy Policy</a>
                <a href="{{ url('/terms') }}">Terms of Service</a>
                <a href="{{ url('/contact') }}">Contact Support</a>
            </div>
        </div>
    </div>
</body>
</html>
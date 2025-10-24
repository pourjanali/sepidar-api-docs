<!--

README دوزبانه (فارسی / انگلیسی)

-->

<div align="center">

<!-- لینک‌های جابجایی زبان -->

English | فارسی

<!-- عنوان پروژه -->

<h1>
مستندات API سپیدار





Sepidar API Documentation
</h1>

<!-- توضیحات کوتاه -->

<p>
مخزن مرکزی برای مشخصات OpenAPI (Swagger) سیستم سپیدار
</p>
<p>
Central repository for the Sepidar System OpenAPI (Swagger) specifications
</p>

<!-- بج‌های دلخواه - می‌توانید آدرس‌ها را بعداً تکمیل کنید -->

<p>
<img src="https://img.shields.io/badge/OpenAPI-3.0-blue.svg?style=flat-square" alt="OpenAPI 3.0">
<img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License MIT">
<!-- <img src="https://img.shields.io/github/last-commit/your-username/your-repo?style=flat-square" alt="Last Commit"> -->
</p>

</div>

<!--

نسخه فارسی

-->

<a name="persian-version"></a>

<div dir="rtl">

🎯 درباره این پروژه

این مخزن به عنوان منبع اصلی و مرکزی برای نگهداری فایل‌های مشخصات OpenAPI (Swagger) سیستم حسابداری سپیدار ایجاد شده است. هدف، ارائه یک مستندسازی واضح، دقیق و قابل خواندن توسط ماشین (machine-readable) از APIهای سپیدار است.

این پروژه خود یک SDK (کیت توسعه نرم‌افزار) نیست، بلکه به عنوان پایه‌ای برای موارد زیر عمل می‌کند:

تولید خودکار SDK به زبان‌های مختلف (مانند PHP, Python, C#, Java, TypeScript) با استفاده از ابزارهایی مانند Swagger Codegen.

ایمپورت کردن در Postman یا ابزارهای مشابه برای تست و تعامل با API.

ارائه مستندات تعاملی با استفاده از ابزارهایی مانند Swagger UI.

📁 مشخصات API موجود

در اینجا لیست فایل‌های OpenAPI (Swagger) موجود برای ماژول‌های مختلف سیستم سپیدار آمده است. (شما باید این بخش را با فایل‌های واقعی خود تکمیل کنید).

ماژول

لینک فایل Swagger

توضیحات

هسته / عمومی

[core.v1.json](specs/core.v1.json)

APIهای پایه مانند احراز هویت، اطلاعات شرکت و...

حسابداری

[accounting.v1.json](specs/accounting.v1.json)

APIهای مربوط به اسناد حسابداری، سرفصل‌ها و...

انبار

[inventory.v1.json](specs/inventory.v1.json)

APIهای مدیریت کالا، انبار، رسید و حواله و...

فروش

[sales.v1.json](specs/sales.v1.json)

APIهای مربوط به فاکتور فروش، پیش‌فاکتور و...

... (سایر ماژول‌ها)





🚀 نحوه استفاده

شما می‌توانید از این فایل‌های مشخصات به روش‌های مختلفی استفاده کنید:

مشاهده مستندات (Swagger UI):

فایل json یا yaml مورد نظر را دانلود کنید.

آن را در یک نمایشگر Swagger UI (مانند Swagger Editor آنلاین) بارگذاری کنید تا مستندات تعاملی را ببینید.

ایمپورت در Postman:

در Postman، از منوی Import استفاده کرده و فایل json مربوطه را انتخاب کنید. یک مجموعه (Collection) کامل از APIها برای شما ساخته می‌شود.

تولید SDK (کلاینت):

از ابزار Swagger Codegen یا OpenAPI Generator استفاده کنید.

به عنوان مثال، برای تولید کلاینت PHP (مانند پروژه‌ای که به آن اشاره کردید):

openapi-generator-cli generate -i specs/accounting.v1.json -g php -o ./sepidar-php-client


🤝 پروژه‌های مرتبط

sepidar-php-sdk: یک نمونه SDK به زبان PHP که می‌تواند بر اساس این مشخصات API ساخته شود.

📜 مجوز (License)

این پروژه تحت مجوز MIT منتشر شده است.

</div>

<!--

English Version

-->

<a name="english-version"></a>

<div dir="ltr">

🎯 About This Project

This repository serves as the central source of truth for the OpenAPI (Swagger) specification files for the Sepidar accounting system. The goal is to provide clear, accurate, and machine-readable documentation for Sepidar's APIs.

This project is not an SDK (Software Development Kit) itself, but rather the foundation for:

Auto-generating SDKs in various languages (like PHP, Python, C#, Java, TypeScript) using tools like Swagger Codegen.

Importing into Postman or similar tools for testing and interaction.

Serving interactive documentation using tools like Swagger UI.

📁 Available API Specifications

Here is a list of the available OpenAPI (Swagger) files for different modules of the Sepidar system. (You should complete this section with your actual files).

Module

Swagger File Link

Description

Core / General

[core.v1.json](specs/core.v1.json)

Base APIs like authentication, company info, etc.

Accounting

[accounting.v1.json](specs/accounting.v1.json)

APIs for vouchers, chart of accounts, etc.

Inventory

[inventory.v1.json](specs/inventory.v1.json)

APIs for items, warehouses, stock transfers, etc.

Sales

[sales.v1.json](specs/sales.v1.json)

APIs related to sales invoices, proformas, etc.

... (Other Modules)





🚀 How to Use

You can use these specification files in several ways:

View Documentation (Swagger UI):

Download the json or yaml file you need.

Load it into a Swagger UI viewer (like the online Swagger Editor) to see the interactive documentation.

Import into Postman:

In Postman, use the Import function and select the relevant json file. A complete collection of requests will be created for you.

Generate an SDK (Client):

Use Swagger Codegen or OpenAPI Generator.

For example, to generate a PHP client (like the project you referenced):

openapi-generator-cli generate -i specs/accounting.v1.json -g php -o ./sepidar-php-client


🤝 Related Projects

sepidar-php-sdk: An example PHP SDK that can be built based on these API specifications.

📜 License

This project is licensed under the MIT License.

</div>

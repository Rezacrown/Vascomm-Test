<h1>Test membuat project yang diberikan oleh PT.VASCOMM SOLUSI TEKNOLOGI</H1>


Dibangun menggunakan Fullstack Next Js Typescript dengan Prisma ORM sebagai koneksi ke database Mysql, mengimplementasikan OAuth2 Dengan menggunakan NextAuth Credential sebagai fitur untuk authenhitacionnya & juga menerapkan send email untuk passwordnya dengan menggunakan Nodemailer sebagai packcage untuk send emailnya.


pada bagian Landingnya mengimplementasikan Fitur Search, Get More Product,serta Login & Register untuk user


pada bagian admin dashboard semua data user & product sudah ditampilkan secara dinamis dengan mengambil dari database

pada bagian management-product, disini admin bisa melakukan CRUD untuk Product yang diinginkan


pada bagian management-user, disini admin bisa menambahkan user, mengedit info user, mendelete user, dan men-aprove status user yang sedang nonaktif


//

Cara menjalankan Project,

1. Git clone project ini

2. "npm Install" pada direktori project ini diterminal

3. jalankan perintah "npx prisma db seed" maka secara otomatis prisma akan membuat migrasi dan melakukan seeding data starter untuk role & user admin

4. jalankan project menggunakan "npm run dev" ataupun "npm run start"


Terimakasih sudah mau membaca🙂
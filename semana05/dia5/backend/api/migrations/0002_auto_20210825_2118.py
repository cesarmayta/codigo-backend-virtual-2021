# Generated by Django 3.2.6 on 2021-08-26 02:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('pedido_id', models.AutoField(primary_key=True, serialize=False)),
                ('pedido_fech', models.DateTimeField(null=True, verbose_name='Fecha')),
                ('pedido_nro', models.CharField(default='', max_length=100, verbose_name='Nro Pedido')),
                ('pedido_est', models.CharField(default='pagado', max_length=100, verbose_name='Estado')),
            ],
        ),
        migrations.AlterField(
            model_name='categoria',
            name='categoria_nom',
            field=models.CharField(max_length=100, verbose_name='nombre'),
        ),
        migrations.AlterField(
            model_name='mesa',
            name='mesa_cap',
            field=models.IntegerField(default=0, verbose_name='Capacidad'),
        ),
        migrations.AlterField(
            model_name='mesa',
            name='mesa_nro',
            field=models.CharField(max_length=10, verbose_name='Nro Mesa'),
        ),
        migrations.AlterField(
            model_name='plato',
            name='categoria_id',
            field=models.ForeignKey(db_column='categoria_id', on_delete=django.db.models.deletion.RESTRICT, related_name='Platos', to='api.categoria', verbose_name='Categoria'),
        ),
        migrations.AlterField(
            model_name='plato',
            name='plato_img',
            field=models.ImageField(blank=True, null=True, upload_to='platos', verbose_name='imagen'),
        ),
        migrations.AlterField(
            model_name='plato',
            name='plato_nom',
            field=models.CharField(max_length=200, verbose_name='nombre'),
        ),
        migrations.AlterField(
            model_name='plato',
            name='plato_pre',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='precio'),
        ),
        migrations.CreateModel(
            name='PedidoPlatos',
            fields=[
                ('pedidoplato_id', models.AutoField(primary_key=True, serialize=False)),
                ('pedidoplato_cant', models.IntegerField(default=1)),
                ('pedido_id', models.ForeignKey(db_column='pedido_id', on_delete=django.db.models.deletion.RESTRICT, related_name='PedidoPlatos', to='api.pedido', verbose_name='Pedido')),
                ('plato_id', models.ForeignKey(db_column='plato_id', on_delete=django.db.models.deletion.RESTRICT, related_name='PedidoPlatos', to='api.plato', verbose_name='Plato')),
            ],
        ),
        migrations.AddField(
            model_name='pedido',
            name='mesa_id',
            field=models.ForeignKey(db_column='mesa_id', on_delete=django.db.models.deletion.RESTRICT, related_name='Pedidos', to='api.mesa', verbose_name='Mesa'),
        ),
        migrations.AddField(
            model_name='pedido',
            name='usu_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, related_name='Pedidos', to=settings.AUTH_USER_MODEL, verbose_name='Usuario'),
        ),
    ]
